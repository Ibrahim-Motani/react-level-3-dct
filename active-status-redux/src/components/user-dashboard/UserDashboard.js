import React from 'react';
import AddUser from './AddUser';
import UsersList from './UsersList';
import UsersControls from './UsersControls';

function UserDashboard() {
    return (
        <div>
            <AddUser></AddUser>
            <UsersList></UsersList>
            <UsersControls></UsersControls>
        </div>
    );
}

export default UserDashboard;
