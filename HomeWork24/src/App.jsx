import React, { useState } from "react";
import { Login } from "./Containers/Login/Login.jsx";
import { UserList } from "./Containers/UserList/UserList.jsx";


export const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))

    const onSuccessLogin = (token) => {
        localStorage.setItem('token', token);
        setToken(token)
    }

    return (
        <>
            {token ? <UserList setToken={setToken} /> : <Login onSuccessLogin={onSuccessLogin}/>}
        </>
    )
};