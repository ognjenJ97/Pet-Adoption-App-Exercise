import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "./pets";

const store = configureStore({
    reducer: { pets: petsReducer }
});

export default store;