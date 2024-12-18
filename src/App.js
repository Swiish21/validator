import React, { useState } from "react";
import validator from 'validator';
import './index.css'; // Import the new CSS file

const App = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');

  const validate = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })) {
      setErrorMessage('This is a strong Password');
    } else {
      setErrorMessage('This is not a strong Password, try again');
    }
  };

  /**
   * Handles input change of the password input field, updates the state
   * of the password and validates the password.
   * @param {object} e - the event object
   */
  const handleInputChange = (e) => {
    setPassword(e.target.value);
    validate(e.target.value);
  };

  return (
    <div className="password-strength-checker">
      <h2>Checking Password Strength in ReactJS</h2>
      <input
        type="text"
        value={password}
        onChange={handleInputChange}
        className="password-input"
        placeholder="Enter Password"
      />
      {errorMessage === '' ? null : (
        <span className={errorMessage.includes('strong') ? 'strong-password' : 'error-message'}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default App;