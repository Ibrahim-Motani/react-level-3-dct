import React from 'react'
import { useDispatch } from 'react-redux';
import { increment } from '../src/actions/countActions';

function Btn() {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(increment())}>+ 1 from btn comp</button>
    )
}

export default Btn
