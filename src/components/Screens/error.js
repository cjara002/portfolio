import React from "react";
import './screens.css'

const ErrorScreen = () => {
  return (

      <div className="error-container">
        <div className="error-message">
        <h1 className="text-white">Something went wrong...</h1>
        <p className="text-white">Please try again</p>
        </div>
      </div>
  );
};

export default ErrorScreen;
