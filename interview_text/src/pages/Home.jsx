import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && phone && email) {
      const userDetails = { name, phone, email };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));

      setName("");
      setPhone("");
      setEmail("");

      alert("Details saved and new tab opened!");
    } else {
      alert("Please fill out all the details before submitting.");
    }
  };

  return (
    <div className="container_1">
      <h1>Enter Your Details</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <Link to="/text">
          <button type="submit" className="submit-button">
            Save Details
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
