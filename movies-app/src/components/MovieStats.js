import React from 'react';
import { useSelector } from 'react-redux';

function MovieStats() {
    const movies = useSelector(state => state.movies.movies);

    let topMovie; let topRating = 0;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].rating > topRating) {
            topRating = movies[i].rating;
            topMovie = movies[i].name;
        };
    };

    return (
        <div>
            <h3>Stats</h3>
            <p>Total Movies - {movies.length}</p>
            <p>Top Movie - { topMovie}</p>
        </div>
    );
}

export default MovieStats;
