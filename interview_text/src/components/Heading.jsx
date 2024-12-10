import React from "react";
import "./Heading.css";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <>
      <div className="container">
        <h1 className="heading">React Interview Text</h1>
        <p className="paragraph">
          Welcome to the React interview guide. Get ready to ace your interview
          with confidence!
        </p>
        <p>Timing 60 minutes</p>
        <p>Click The below link:</p>
        <Link to="/home">
          <p className="link">Open the link </p>
        </Link>
      </div>
    </>
  );
};

export default Heading;
