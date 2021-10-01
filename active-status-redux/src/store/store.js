import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users";

// creating store with above reducer
const store = configureStore({
    reducer: usersSlice.reducer ,
});

// connection to app
export default store;