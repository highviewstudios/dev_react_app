import React, { createContext, useState } from 'react';

export const UserContext = createContext();

function UserContextProvider(props) {
    
    const [user, setUser] = useState({
        name: '',
        email: ''
    });

    function updateUser(field, value) {
        setUser((prev) => {
            return {...prev, [field]: value}
        })
    }
    
    return (
        <UserContext.Provider value={{user, updateUser}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;