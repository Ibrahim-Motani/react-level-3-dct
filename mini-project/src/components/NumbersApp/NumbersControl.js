import React from 'react';
import { addNumber, plusTwo, removeAll } from '../../actions/numbersAction';
import { useDispatch } from 'react-redux';

function NumbersControl() {
    const dispatch = useDispatch();

    const generateNumber = () => {
        const randomNumber = Math.round(Math.random() * 100);
        const num = {
            id: Number(new Date()),
            value: randomNumber,
        };
        dispatch(addNumber(num));
    };

    const handlePLusTwo = () => {
        dispatch(plusTwo());
    };

    const handleRemoveAll = () => {
        dispatch(removeAll());
    };

    return (
        <div>
            <button onClick={generateNumber}>Generate</button>
            <button onClick={handlePLusTwo}>+2</button>
            <button onClick={handleRemoveAll}>Remove All</button>
        </div>
    )
}

export default NumbersControl;
