import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
    },
    reducers: {
        addMovie(state, action) {
            const newMovie = { name: action.payload.name, rating: action.payload.rating, id: action.payload.id };
            state.movies.push(newMovie);
        },
        removeMovie(state, action) {
            state.movies =  state.movies.filter(movie => movie.id !== action.payload.id);
        },
    },
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice;