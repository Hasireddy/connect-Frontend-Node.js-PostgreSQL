//User.js display the data.
import React from 'react';

const User = ({ first_name, last_name, age }) => {
    console.log(first_name);
    return (
        <div>
            <p>{first_name}</p>
            <p>{last_name}</p>
            <p>{age}</p>
        </div>
    );
}

export default User;