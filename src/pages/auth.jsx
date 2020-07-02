import React, { useEffect, useContext } from 'react';
import Axios from 'axios';
import ServerPath, { hostPath } from "../ServerPath";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/userContext';


function Auth() {

    const history = useHistory();
    const { updateUser } = useContext(UserContext);

    useEffect(() => {
        ServerPath();
        onOpen();
    }, []);

    function onOpen() {
        Axios.get("/auth", {withCredentials: true })
        .then(res => {
            console.log(res);
            const isAuth = res.data.auth;

            if(isAuth) {
                updateUser("name", res.data.user.displayName);
                history.push('/home');
            } else {
                history.push('/signin');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
        <h1>Auth</h1>
        </div>
    )
}

export default Auth;