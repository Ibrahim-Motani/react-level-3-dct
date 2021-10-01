// react imports
import React, { useState } from 'react';
// redux imports
import { useDispatch } from 'react-redux';
// actions import 
import { usersActions } from '../../store/users';

function AddUser() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [active, setActive] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        const formData = { id: new Date().toString(), name, active };
        dispatch(usersActions.addUser(formData));
        setName('');
        setActive(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label> <br />
            <input value={name} onChange={event => setName(event.target.value)} type="text" /> <br />
            <label>Active</label>
            <input checked={active} onChange={event => setActive(event.target.checked)} type="checkbox" /> <br />
            <button type="submit">Add User</button>
        </form>
    );
}

export default AddUser;
