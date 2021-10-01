import React from 'react';
import { useSelector } from 'react-redux';
import NumbersControl from './NumbersControl';
import NumbersList from './NumbersList';
import AddNumber from './AddNumber';
import { Link } from 'react-router-dom';

function NumbersContainer() {
    const numbers = useSelector(state => state.numbers);

    const findSum = () => {
        return numbers.reduce((acc, curr) => acc += curr.value, 0);
    };

    return (
        <div>
            <h2>Listing - {numbers.length}, Sum - {findSum()}</h2>
            <NumbersList></NumbersList>
            <NumbersControl></NumbersControl>
            <AddNumber></AddNumber>

            <Link to="/">Home</Link>|
            <Link to="/users">Users</Link>
        </div >
    );
}

export default NumbersContainer;
