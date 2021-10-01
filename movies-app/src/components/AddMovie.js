import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { moviesActions } from '../store/movies-slice';

function AddMovie() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const movieObject = { id: String(new Date()) , name, rating };
        dispatch(moviesActions.addMovie(movieObject));

        setName('');
        setRating('');
    };

    return (
        <div>
            <h3>Plus Movie</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="Enter Movie Name" />
                <br />
                <input
                    value={rating}
                    onChange={event => setRating(event.target.value)}
                    type="number"
                    placeholder="IMDB Rating" />
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddMovie;
