import React, { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';

function App() {
  // State to manage which form is visible; initialize to true to show LoginForm first
  const [isSignup, setIsSignup] = useState(false);

  // Toggle between LoginForm and SignupForm
  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div>
      {isSignup ? <SignupForm toggleForm={toggleForm} /> : <LoginForm toggleForm={toggleForm} />}
    </div>
  );
}

export default App;

