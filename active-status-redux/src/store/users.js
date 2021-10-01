import { createSlice } from "@reduxjs/toolkit";

const initialUsersState = {
    users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    removeUser(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    toggleUserStatus(state, action) {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id === action.payload) {
          state.users[i].active = !state.users[i].active;
          break;
        }
      }
    },
    activateAllUsers(state) {
      state.users = state.users.map(user => {
        return { ...user, active: true };
      });
    },
    deactivateAllUsers(state) {
      state.users = state.users.map(user => {
        return { ...user, active: false };
      });
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;