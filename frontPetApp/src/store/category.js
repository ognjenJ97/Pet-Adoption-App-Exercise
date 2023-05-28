import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TestAxios from "../apis/TestAxios";


//initial state
const initialState = {
    category: [],
    loading: false,
    error: null
}

//fetching data 
export const fetchCategory = createAsyncThunk(
    'category, fetchCategory',
    async () => {
        try {
            const response = await TestAxios.get('/kategorije');
            return response.data;
        } catch (error) {
            throw new Error('Error occured. Please try again')
        }
    }
)

//create Slice
const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.category = action.payload;
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }

})

export default categorySlice.reducer;

