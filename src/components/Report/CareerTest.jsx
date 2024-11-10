import React, { useState, useEffect } from 'react';
import questions from './questions.json'; // Import questions from the JSON file
import Result from './Result.jsx';
import backgroundImage from './Career.jpg'; // Import the background image

const CareerTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    // Start timer when the component is mounted
    const interval = setInterval(() => {
      setTimeTaken(prevTime => prevTime + 1);
    }, 1000);
    setTimer(interval);

    // Clear the timer on unmount
    return () => clearInterval(interval);
  }, []);

  const handleAnswer = (value) => {
    setResponses([...responses, value]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      clearInterval(timer); // Stop the timer when the quiz is completed
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image as the background
    >
      <div className="max-w-3xl w-full bg-white bg-opacity-80 p-8 rounded-lg shadow-xl">
        {quizCompleted ? (
          <Result
            responses={responses}
            timeTaken={timeTaken}
            handleTryAgain={() => {
              setCurrentQuestion(0);
              setResponses([]);
              setQuizCompleted(false);
              setTimeTaken(0);
            }}
          />
        ) : (
          <>
            {/* Display Question Number/Total Questions and Timer */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-semibold text-gray-800">
                {questions[currentQuestion].question}
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <p className="mt-2 text-lg text-gray-600">Time Taken: {timeTaken} seconds</p>
            </div>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option) => (
                <div key={option.value} className="flex items-center space-x-4">
                  <input
                    type="radio"
                    id={option.value}
                    name="answer"
                    value={option.value}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                    onChange={() => handleAnswer(option.value)}
                  />
                  <label htmlFor={option.value} className="text-lg font-medium text-gray-800">
                    {option.text}
                  </label>
                </div>
              ))}
            </div>

            {/* Navigation buttons (Previous/Next) */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevious}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={currentQuestion + 1 === questions.length}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CareerTest;