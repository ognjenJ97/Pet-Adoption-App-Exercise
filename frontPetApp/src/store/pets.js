import { createAsyncThunk, createSlice, isRejectedWithValue  } from "@reduxjs/toolkit";
import TestAxios from "../apis/TestAxios";

//initial state
const initialPets = {
    pets: [],
    loading: false,
    error: null,
    totalPages: 0,
    pageNo: 0
};

//fetching data
export const fetchPets = createAsyncThunk(
    'ljubimci/fetchPets',
    async (params) => {
      try {
        const response = await TestAxios.get('/ljubimci', { params });
        const totalPages = response.headers['total-pages'];
        return{
            pets: response.data,
            totalPages
        }
      } catch (error) {
        return isRejectedWithValue (error.response.data);
      }
    }
  );


//slice for pets 
const petsSlice = createSlice({
    name: 'pets',
    initialState: initialPets,
    reducers: {},
    extraReducers: (builder) => {
        //reducers for async function fetchPets
        builder
            .addCase(fetchPets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPets.fulfilled, (state, action) => {
                state.loading = false;
                state.pets = action.payload.pets;
                state.pageNo = action.payload.pageNo;
                state.totalPages = action.payload.totalPages;
            })
            .addCase(fetchPets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export const petsActions = {fetchPets};

export default petsSlice.reducer;