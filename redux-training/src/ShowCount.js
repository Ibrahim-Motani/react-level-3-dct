import React from 'react';
import { useSelector } from 'react-redux';

function ShowCount() {
    const count = useSelector(state => state.count);

    return (
        <div>
            <h4>count - { count}</h4>
        </div>
    )
}

export default ShowCount
