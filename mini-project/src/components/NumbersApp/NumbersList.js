import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementNum, incrementNum, removeNumber } from '../../actions/numbersAction';

function NumbersList() {
    const dispatch = useDispatch();

    const numbers = useSelector(state => state.numbers);

    const handleIncrement = id => {
        dispatch(incrementNum(id));
    };

    const handleDecrement = id => {
        dispatch(decrementNum(id));
    };

    const handleRemove = id => {
        dispatch(removeNumber(id));
    };

    return (
        <div>
            <ul>
                {numbers.map(num => {
                    return (
                        <li key={num.id}>{num.value}
                            <button onClick={() => handleDecrement(num.id)}>-</button>
                            <button onClick={() => handleIncrement(num.id)}>+</button> <button onClick={() => handleRemove(num.id)}>Remove</button>
                        </li>);
                })}
            </ul>
        </div>
    )
}

export default NumbersList
