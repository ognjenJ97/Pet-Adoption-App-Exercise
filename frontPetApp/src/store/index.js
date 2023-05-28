import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "./pets";
import categoryReducer from './category';

const store = configureStore({
    reducer: { pets: petsReducer, category: categoryReducer }
});

export default store;