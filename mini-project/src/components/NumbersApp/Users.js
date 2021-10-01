import React, { useEffect } from 'react';
import { startGetUsers } from '../../actions/usersAction';
import { useDispatch, useSelector } from 'react-redux';

function Users() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        // invoke an action creator
        dispatch(startGetUsers());
    }, []);

    return (
        <div>
            Listing Users - {users.length}
        </div>
    );
}

export default Users;
