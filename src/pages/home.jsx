import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

function Home() {

    const {user} = useContext(UserContext)

    return(
        <div>
        <h1>React - Welcome to Test STAFF!</h1>
        <h2>{user.name}</h2>
        <a href="http://localhost:8080/logout">Sign Out</a>
        </div>
    );
}

export default Home;