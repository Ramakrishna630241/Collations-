import React from "react";
import { Routes, Route } from "react-router-dom";
import Heading from "./components/Heading";
import Home from "./pages/Home";
import InterviewText from "./pages/InterviewText";
import Result from "./pages/Result";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Heading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/text" element={<InterviewText />} />
        <Route path="/results" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
