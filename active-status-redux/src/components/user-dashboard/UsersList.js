// react imports
import React, { useState, useEffect } from "react";

// redux imports
import { useSelector, useDispatch } from "react-redux";

// actions imports
import { usersActions } from "../../store/users";

function UsersList() {
  const dispatch = useDispatch();

  const users = useSelector(state => state.users);

  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleRemove = id => {
    dispatch(usersActions.removeUser(id));
  };

  const handleStatusChange = id => {
    dispatch(usersActions.toggleUserStatus(id));
  };

  useEffect(() => {
    if (search === "") {
      setFilteredUsers(users);
    } else {
      const newUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredUsers(newUsers);
    }
  }, [search, users]);

  return (
    <div>
      <h3>Listing Users - {users.length}</h3>
      <input
        type="text"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <table border="1px">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Active</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>
                  <input
                    checked={user.active}
                    onChange={() => handleStatusChange(user.id)}
                    type="checkbox"
                  ></input>
                </td>
                <td>
                  <button onClick={() => handleRemove(user.id)}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
