// react imports
import React from 'react';
// redux imports
import { useDispatch } from 'react-redux';
// actions import
import { usersActions } from '../../store/users';

function UsersControls() {
    const dispatch = useDispatch();

    const activateAll = () => {
        dispatch(usersActions.activateAllUsers());
    };

    const deactivateAll = () => {
      dispatch(usersActions.deactivateAllUsers());
    };

    return (
        <div>
            <button onClick={activateAll}>Activate</button>
            <button onClick={deactivateAll}>Deactivate</button>
        </div>
    );
}

export default UsersControls;
