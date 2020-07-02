import React, { useEffect, useContext } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AdminContext} from '../../context/adminContext';


function Auth() {

    const history = useHistory();
    const {updateUser } = useContext(AdminContext);

    useEffect(() => {
        onOpen()
    }, []);

    function onOpen() {

        Axios.get("/administrator/auth")
        .then(res => {
            const data = res.data;
            if(data.auth) {
                updateUser("granted", data.access);
                if(data.access == "granted") {
                    history.push('/administrator/home');
                } else {
                    history.push('/administrator/signin');
                }
            } else {
                history.push('/administrator/signin');
            }
        })  
        .catch(err => {
            console.log(err);
        })
    }

    return(<h1>Auth</h1>)
}

export default Auth;