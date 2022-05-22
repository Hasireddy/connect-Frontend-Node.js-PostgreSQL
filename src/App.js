import React from 'react';
import User from './components/User.js';
import Users from './components/Users.js';
import Form from './components/Form.js';

function App() {
  return (
    <div className="App">
      <h1>Connecting Front end to PostgreSQL</h1>
      <Form />
      <Users />
      <User />
    </div>
  );
}

export default App;
