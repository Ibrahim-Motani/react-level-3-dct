import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';

function MoviesList() {
    const movies = useSelector(state => state.movies.movies);
    const [search, setSearch] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(movies);

    useEffect(() => {
        if (search === '') {
            setFilteredMovies(movies);
        } else {
            setFilteredMovies(movies.filter(movie => movie.name.includes(search)));
        }
    }, [search, movies]);

    return (
        <>
            <input type="text" value={search} onChange={event => setSearch(event.target.value)} />
            <ul>
                {filteredMovies.map(movie => {
                    return (
                        <MovieItem key={movie.id} name={movie.name} rating={movie.rating} id={movie.id} ></MovieItem>
                    );
                })}
            </ul>
        </>
    )
}

export default MoviesList
