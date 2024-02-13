import React, { useState } from "react";
import "./Login.css";

// A custom component for the logo
function Logo() {
  return (
    <div className="logo">
      <img src="kaizntree-logo.png" alt="Kaizntree Logo" />
    </div>
  );
}

// A custom component for the input fields
function InputField(props) {
  return (
    <input
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className="input-field"
    />
  );
}

// A custom component for the buttons
function Button(props) {
  return (
    <button
      id={props.id}
      onClick={props.onClick}
      className="button"
      style={{ backgroundColor: props.color }}
    >
      {props.text}
    </button>
  );
}

// A custom component for the password recovery link
function ForgotLink(props) {
  return (
    <a href="#" id={props.id} onClick={props.onClick} className="forgot-link">
      {props.text}
    </a>
  );
}

// A custom component for the error message
function ErrorMessage(props) {
  return <p id={props.id} className="error-message">{props.text}</p>;
}

// The main component for the login interface
function Login() {
  // Define the state variables for the username, password, and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Define the handler functions for the input fields, buttons, and link
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    // Clear the error message
    setError("");

    // Check if the username and password are not empty
    if (username === "" || password === "") {
      // Display an error message
      setError("Please enter your username and password.");
    } else {
      // Perform the login logic here
      // For example, you can call an API to verify the credentials
      // If the login is successful, redirect the user to the dashboard
      // If the login fails, display an error message
      // For simplicity, we will assume the login is always successful
      alert("Login successful!");
      window.location.href = "/dashboard";
    }
  };

  const handleCreateClick = () => {
    // Clear the error message
    setError("");

    // Redirect the user to the sign up page
    window.location.href = "/signup";
  };

  const handleForgotClick = () => {
    // Clear the error message
    setError("");

    // Redirect the user to the password recovery page
    window.location.href = "/forgot";
  };

  // Return the JSX elements for the login interface
  return (
    <div className="container">
      <Logo />
      <div className="form">
        <InputField
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <InputField
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          id="login-button"
          onClick={handleLoginClick}
          color="#00a0ff"
          text="LOG IN"
        />
        <Button
          id="create-button"
          onClick={handleCreateClick}
          color="#00a0ff"
          text="CREATE ACCOUNT"
        />
        <ForgotLink
          id="forgot-link"
          onClick={handleForgotClick}
          text="Forgot Password?"
        />
        <ErrorMessage id="error-message" text={error} />
      </div>
    </div>
  );
}

export default Login;
