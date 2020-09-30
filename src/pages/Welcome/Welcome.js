import React from "react";
import './welcome.css';

import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="container">
        <h1>Welcome</h1>
        <Link className="link" to="/home">Go to home</Link>
      </div>
    </div>
  );
};

export default Welcome;
