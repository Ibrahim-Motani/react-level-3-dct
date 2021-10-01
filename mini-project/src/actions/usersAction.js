import axios from 'axios';
// start or async

export const startGetUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data;
                dispatch(setUsers(users));
            })
            .catch(error => {
                alert(error.message);
            });
    }
};

export const setUsers = users => {
    return {
        type: 'SET_USERS',
        payload: users,
    }
};