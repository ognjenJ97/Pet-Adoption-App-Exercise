import { createAsyncThunk, createSlice, isRejectedWithValue  } from "@reduxjs/toolkit";
import TestAxios from "../apis/TestAxios";
import moment from "moment/moment";

//initial state
const initialPets = {
    pets: [],
    loading: false,
    error: null,
    totalPages: 0,
    pageNo: 0,
};

//init empty search
const empty_search = {
  categorySearch: '',
  genderSearch: '',
  descSearch: ''
};

//vaccination
export const vaccination = createAsyncThunk(
  'pet/vaccination',
  async (id, { dispatch }) => {
    try {
      await TestAxios.post(`/ljubimci/${id}/promena`);
      dispatch(fetchPets({ search: empty_search, newPageNo: 0 }));
      setTimeout(() => {
        alert('You have successfully vaccinated your pet!');
      }, 50);
    } catch (error) {
      return isRejectedWithValue(error.response.data);
    }
  }
)

//adopt a pet 
export const adoption = createAsyncThunk(
  'pet/adoption',
  async (id, { dispatch }) => {
    try {
      const newDate = moment().format("YYYY-MM-DD HH:mm");

      var params = {
        datumUdomljavanja: newDate,
        ljubimacId: id,
      }

      await TestAxios.post('/udomljavanja', params);
      dispatch(fetchPets({ search: empty_search, newPageNo: 0 }));
      setTimeout(() => {
        alert('You have successfully adopt your new pet!');
      }, 500);
    } catch (error) {
      throw new Error('adopt error.');
    }
  }
)

//add new pet
export const addPet = createAsyncThunk(
  'pet/addPet',
  async (newPet, { dispatch }) => {
    try {

      var params = {
        ime: newPet.name,
        starost: newPet.age,
        pol: newPet.gender,
        tezina: newPet.weight,
        opis: newPet.description,
        kategorijaId: newPet.categoryId
      };

      await TestAxios.post('/ljubimci', params);
      alert('Pet was added successfully!');
      dispatch(fetchPets({ search: empty_search, newPageNo: 0 }));
    } catch (error) {
      return isRejectedWithValue(error.response.data);
    }
  }
);

//delete pet
export const deletePet = createAsyncThunk(
  'pet/deletePet',
  async (petId, {dispatch}) => {
    try {
      await TestAxios.delete(`/ljubimci/${petId}`);
      dispatch(fetchPets({ search: empty_search, newPageNo: 0 }));
      setTimeout(() => {
        alert('Pet was deleted successfully!');
      }, 50);
    } catch (error) {
      return isRejectedWithValue(error.response.data);
  }
})

//fetching data
export const fetchPets = createAsyncThunk(
    'ljubimci/fetchPets',
    async ({ search, newPageNo }, { dispatch }) => {
      try {

        console.log("params u fetchu" + JSON.stringify(search));
        const conf = {
          params: {
            kategorijaId: search.categorySearch,
            pol: search.genderSearch,
            opis: search.descSearch,
            pageNo: newPageNo
          },
        };

        const response = await TestAxios.get('/ljubimci', conf);
        const totalPages = response.headers['total-pages'];
        return{
            pets: response.data,
            totalPages,
            pageNo: newPageNo
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
            })
            .addCase(deletePet.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(deletePet.fulfilled, (state, action) => {
              state.loading = false;
            })
            .addCase(deletePet.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            })
            .addCase(addPet.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(addPet.fulfilled, (state, action) => {
              state.loading = false;
            })
            .addCase(addPet.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            })
            .addCase(adoption.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(adoption.fulfilled, (state) => {
              state.error = false;
            })
            .addCase(adoption.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            })
            .addCase(vaccination.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
            .addCase(vaccination.fulfilled, (state) => {
              state.error = false;
            })
            .addCase(vaccination.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            });
            builder.addMatcher(
              (action) => action.type === fetchPets.fulfilled.type,
              (state, action) => {
              state.pageNo = action.payload.pageNo;
              })
    }
})

export const petsActions = {fetchPets, deletePet, addPet, adoption, vaccination};

export default petsSlice.reducer;