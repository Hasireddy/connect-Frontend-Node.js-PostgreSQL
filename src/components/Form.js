
import React, { useState, useEffect } from 'react';

const Form = () => {
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [age, setAge] = useState();

    const handleSubmit = (e) => {
        // e.preventDefault();
        fetch('http://localhost:5000/users'
            , {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ first_name: first, last_name: last, age: age }) //transform the data into string and send because all the communication will be in the string format.This values are passed into table in the backend.
            }).then(res => res.json())
            .then(data => console.log(data))
            .catch((err) => console.log(err));
    };
    return (
        <div>
            {/* <form>//form method="POST",method="url". */}
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <p>{first}</p>
                <p>{last}</p>
                <p>{age}</p>
                <input type="text" placeholder="Enter Firtname" name="first_name" onChange={(e) => setFirst(e.target.value)} />
                <input type="text" placeholder="Enter Lastname" name="last_name" onChange={(e) => setLast(e.target.value)} />
                <input type="text" placeholder="Age" name="age" onChange={(e) => setAge(e.target.value)} /> <br />
                {/* <input type="email" placeholder="Email here" name="email" />
                <input type="password" placeholder="Enter password" name="password" /> */}
                <button>Submit</button>
            </form>
        </div>
    );
}
export default Form;