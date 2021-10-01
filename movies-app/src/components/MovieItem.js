import React from 'react';
import { moviesActions } from '../store/movies-slice';
import { useDispatch } from 'react-redux';

function MovieItem({ name, rating, id }) {
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(moviesActions.removeMovie({ id }));
    };

    return (
        <div key={id}>
            <h4>{name}</h4>
            <h4>{rating}</h4>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default MovieItem
