// import React from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import {useState} from "react";

function App() {
    const [users, updateUsers] = useState([]);
    const onAddUserHandler = (user) => {
        updateUsers((prevState) => {
            return [user, ...prevState];
        });
    }
    return (
        <>
            <AddUser onAddUser={onAddUserHandler}/>
            <UsersList usersList={users}/>
        </>
    );
}

export default App;
