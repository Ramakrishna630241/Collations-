import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // to navigate back to the form

const Results = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="results-container">
      <h2>Your Interview Results</h2>
      <div className="result">
        <strong>What is React JS?</strong>
        <p>{formData.reactDescription}</p>
      </div>
      <div className="result">
        <strong>Why Use React?</strong>
        <p>{formData.useReactReason}</p>
      </div>
      <div className="result">
        <strong>Preferred UI Library</strong>
        <p>{formData.selectedOption}</p>
      </div>
      <div className="result">
        <strong>React Skills</strong>
        <ul>
          {formData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default Results;
