import React, { useState } from 'react';
import { addNumber } from '../../actions/numbersAction';
import { useDispatch } from 'react-redux';


function AddNumber() {
    const dispatch = useDispatch();

    const [number, setNumber] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        const num = {
            id: Number(new Date()), value: Number(number)
        };
        dispatch(addNumber(num));
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={number} onChange={event => setNumber(event.target.value)} />
        </form>
    )
}

export default AddNumber
