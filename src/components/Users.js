//Users.js will fetch the data from backend.

import React, { useState, useEffect } from 'react';
import User from './User.js';

const Users = () => {
    const url = 'http://localhost:5000/users';
    const [users, setUsers] = useState([]); //data is coming in the form of array.
    useEffect(() => {
        fetch(url) //use const cors = require('cors'),app.use(cors()) in backend to connect frontend to backend.
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setUsers(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            {
                users.map(user => < User key={user.id} first_name={user.first_name} last_name={user.last_name} age={useEffect.age}
                />)}
        </div>
    );
}

export default Users;