import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./InterviewText.css";

const InterviewText = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    reactDescription: "",
    useReactReason: "",
    selectedOption: "",
    skills: [],
  });

  const [timeLeft, setTimeLeft] = useState(60);
  const [timerActive, setTimerActive] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      skills: checked
        ? [...prevData.skills, value]
        : prevData.skills.filter((skill) => skill !== value),
    }));
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      selectedOption: e.target.value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData));

    navigate("/results");
  };

  // Timer functionality
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timerActive, timeLeft]);

  const startTimer = () => {
    setTimerActive(true);
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <label>What is React JS?</label>
        <input
          type="text"
          name="reactDescription"
          value={formData.reactDescription}
          onChange={handleInputChange}
          placeholder="Describe React JS"
        />
      </div>

      <div className="form-group">
        <label>Why Use React?</label>
        <input
          type="text"
          name="useReactReason"
          value={formData.useReactReason}
          onChange={handleInputChange}
          placeholder="Explain why you use React"
        />
      </div>

      <div className="form-group">
        <label>What is your preferred UI library?</label>
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              name="selectedOption"
              value="Material UI"
              checked={formData.selectedOption === "Material UI"}
              onChange={handleRadioChange}
            />
            Material UI
          </label>
          <label>
            <input
              type="radio"
              name="selectedOption"
              value="Ant Design"
              checked={formData.selectedOption === "Ant Design"}
              onChange={handleRadioChange}
            />
            Ant Design
          </label>
          <label>
            <input
              type="radio"
              name="selectedOption"
              value="Bootstrap"
              checked={formData.selectedOption === "Bootstrap"}
              onChange={handleRadioChange}
            />
            Bootstrap
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Select your React Skills</label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              value="useState"
              checked={formData.skills.includes("useState")}
              onChange={handleCheckboxChange}
            />
            useState
          </label>
          <label>
            <input
              type="checkbox"
              value="useEffect"
              checked={formData.skills.includes("useEffect")}
              onChange={handleCheckboxChange}
            />
            useEffect
          </label>
          <label>
            <input
              type="checkbox"
              value="useContext"
              checked={formData.skills.includes("useContext")}
              onChange={handleCheckboxChange}
            />
            useContext
          </label>
          <label>
            <input
              type="checkbox"
              value="Redux"
              checked={formData.skills.includes("Redux")}
              onChange={handleCheckboxChange}
            />
            Redux
          </label>
        </div>
      </div>

      {/* Timer */}
      <div className="timer">
        <h3>Time Remaining: {timeLeft} seconds</h3>
        {!timerActive && <button onClick={startTimer}>Start Exam</button>}
      </div>

      {/* Submit button */}
      {timerActive && (
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      )}
    </div>
  );
};

export default InterviewText;
