import React, { useState } from 'react';

function TestArea() {

    const[user, setUser] = useState({
        name: '',
        email:''
    });

    function handleClick() {
        updateUser("name", "bill");
        console.log(user);
    }

     function updateUser(feild, value) {
         setUser((prev) => {
            return {
                ...prev, 
                [feild]: value}
        })

        
    }

    return(
        <div>
        <h1>Test Area</h1>
        <form action="/form" method="POST">
            <input id="first" name="name"></input>
            <button onClick={handleClick}>Go</button>
        </form>
        </div>
    );
}

export default TestArea;