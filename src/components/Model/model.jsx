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
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

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
          backgroundColor: "#f4f9ff",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          className="text-center mb-5"
          style={{
            color: "#0056b3",
            fontWeight: "700",
            fontSize: "2.8rem",
            letterSpacing: "1.2px",
          }}
        >
          College Prediction
        </h1>
        <form
          onSubmit={handleSubmit}
          className="shadow-sm p-5 bg-white rounded"
          style={{
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="mb-4">
            <label className="form-label" style={{ fontWeight: "600", color: "#555" }}>Rank:</label>
            <input
              type="number"
              className="form-control"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              required
              style={{
                borderRadius: "8px",
                border: "1px solid #ced4da",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              }}
            />
          </div>
          <div className="mb-4">
            <label className="form-label" style={{ fontWeight: "600", color: "#555" }}>Category:</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              style={{
                borderRadius: "8px",
                border: "1px solid #ced4da",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              }}
            >
              <option value="OPNOOS">Delhi</option>
              <option value="OPNOHS">Outside Delhi</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="form-label" style={{ fontWeight: "600", color: "#555" }}>Shift:</label>
            <select
              className="form-select"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              required
              style={{
                borderRadius: "8px",
                border: "1px solid #ced4da",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              }}
            >
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="form-label" style={{ fontWeight: "600", color: "#555" }}>Round Number</label>
            <select
              className="form-select"
              value={roundNum}
              onChange={(e) => setRoundNum(e.target.value)}
              required
              style={{
                borderRadius: "8px",
                border: "1px solid #ced4da",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{
                backgroundColor: "#007bff",
                border: "none",
                borderRadius: "25px",
                padding: "12px 36px",
                fontSize: "1rem",
                fontWeight: "600",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              {loading ? "Processing..." : "Get Predictions"}
            </button>
          </div>
        </form>

        {error && <div className="alert alert-danger mt-4">{error}</div>}

        {loading && (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {colleges.length > 0 && (
          <div className="mt-5 mb-5">
            <h2
              className="text-center mb-4"
              style={{ color: "#0056b3", fontWeight: "700" }}
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
                    backgroundColor: "#f0f8ff",
                    color: "#0056b3",
                    borderRadius: "8px",
                    border: "1px solid #007bff",
                    marginBottom: "10px",
                    padding: "12px 20px",
                    transition: "transform 0.3s, background-color 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.backgroundColor = "#e3f1ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.backgroundColor = "#f0f8ff";
                  }}
                >
                  <strong style={{ marginRight: "8px", color: "#007bff" }}>
                    {index + 1}.
                  </strong>
                  {college}
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
