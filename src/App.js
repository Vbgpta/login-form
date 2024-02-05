import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";


function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
    username:"user1",
    password:"pass1",
    email:"email1"
  },
  {
    username:"user2",
    password:"pass1",
    email:"email1"
  },
  
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
    email:"invalid email"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname,pass } = document.forms[0];

    const userData = database.find((user)=> user.username === uname.value);

    if(userData) {
      if(userData.password !== pass.value) {

        setErrorMessages({name:"pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessages = (name) =>
   name === errorMessages.name && (
    <div className='error'>{errorMessages.message}</div>
   );

  const renderForm = (
    <div className='form'>
      <form onSubmit = {handleSubmit}>
        <div className='input-container'>
          <label>Username:</label>
          <input type="text" name='uname' required />
          {renderErrorMessages("uname")}
        </div>
        <div className='input-container'>
          <label>Password: </label>
          <input type='password' name='pass' required />
          {renderErrorMessages("pass")}
        </div>
        <div className='input-container'>
          <label>Email: </label>
          <input type='email' name='email' required />
          {renderErrorMessages('email')}
        </div>
        <div className='button-container'>
          <input type='submit'/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className='login-app'>
        <div className='title'>Login-Form</div>
        {isSubmitted ?<div>Welcome!! user logged successful</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
