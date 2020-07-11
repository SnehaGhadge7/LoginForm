import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import LoginForm from './project/LoginForm';


function App() {
  return (
    <>
    <div>
      <LoginForm />
    </div>
    </>    
  );
}

export default App;
