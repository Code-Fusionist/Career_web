// model.jsx
import React, { useState, useEffect } from "react";
import Foooter from "../Home/Foooter";
import "./model.css";

const CollegePredictionForm = () => {
  const [rank, setRank] = useState("");
  const [category, setCategory] = useState("OPNOOS");
  const [shift, setShift] = useState("Morning");
  const [roundNum, setRoundNum] = useState();
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pageLoaded, setPageLoaded] = useState(false); // State for page load animation

  useEffect(() => {
    // Trigger page load animation
    setPageLoaded(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Mock data for testing UI without server connection
    const mockColleges = ["College A", "College B", "College C"];
    
    setTimeout(() => {
      setColleges(mockColleges);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div
        className={`container mt-5 ${pageLoaded ? 'fade-in' : ''}`}
        style={{
          transition: "opacity 1.5s ease-in-out",
          opacity: pageLoaded ? 1 : 0,
          backgroundColor: "#f0f8ff", // Light background color for the page
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h1
          className="text-center mb-4"
          style={{
            color: "#007bff",
            fontWeight: "bold",
            fontSize: "2.5rem",
            letterSpacing: "1px",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          College Prediction
        </h1>
        <form
          onSubmit={handleSubmit}
          className="shadow-lg p-4 bg-light rounded"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="mb-3">
            <label className="form-label">Rank:</label>
            <input
              type="number"
              className="form-control"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              required
              style={{
                borderRadius: "5px",
                borderColor: "#007bff",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category:</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              style={{
                borderRadius: "5px",
                borderColor: "#007bff",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <option value="OPNOOS">Delhi</option>
              <option value="OPNOHS">Outside Delhi</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Shift:</label>
            <select
              className="form-select"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              required
              style={{
                borderRadius: "5px",
                borderColor: "#007bff",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Round Number</label>
            <select
              className="form-select"
              value={roundNum}
              onChange={(e) => setRoundNum(e.target.value)}
              required
              style={{
                borderRadius: "5px",
                borderColor: "#007bff",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{
                backgroundColor: "#007bff",
                borderColor: "#0056b3",
                borderRadius: "50px",
                padding: "10px 30px",
                fontSize: "1.1rem",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              Get Predictions
            </button>
          </div>
        </form>

        {error && <div className="alert alert-danger mt-4">{error}</div>}

        {loading && (
          <div className="text-center mt-10 mb-10">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {colleges.length > 0 && (
          <div className="mt-10 mb-24">
            <h2
              className="text-center mb-4"
              style={{ color: "#007bff", fontWeight: "bold" }}
            >
              Recommended Colleges
            </h2>
            <ul className="list-group">
              {colleges.map((college, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex align-items-center animate__animated animate__fadeInUp"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    backgroundColor: "#e9f7ff",
                    color: "#0056b3",
                    borderRadius: "8px",
                    border: "1px solid #007bff",
                    marginBottom: "10px",
                    transition: "transform 0.3s, background-color 0.3s",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    padding: "10px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.backgroundColor = "#d4e9ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.backgroundColor = "#e9f7ff";
                  }}
                >
                  <strong className="mr-2" style={{ color: "#007bff" }}>
                    {index + 1}.
                  </strong>
                  <span>{college}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Foooter />
    </>
  );
};

export default CollegePredictionForm;
