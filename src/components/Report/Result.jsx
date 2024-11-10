import React from 'react';

// Career suggestions based on dominant skills
const careerSuggestions = {
  creativity: "Design, Marketing, Content Creation",
  analytical: "Data Science, Engineering, Research",
  leadership: "Management, Consulting, Entrepreneurship",
  collaboration: "Team Management, Customer Support, Project Coordination",
};

// Function to analyze responses and determine dominant skill
const analyzeResponses = (responses) => {
  const counts = responses.reduce((acc, response) => {
    acc[response] = (acc[response] || 0) + 1;
    return acc;
  }, {});

  const dominantSkill = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

  return {
    skill: dominantSkill,
    suggestion: careerSuggestions[dominantSkill] || "No suggestion available for this skill",
  };
};

const Result = ({ responses, timeTaken, handleTryAgain }) => {
  const { skill, suggestion } = analyzeResponses(responses);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-teal-500 to-blue-600">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl text-center">
        {/* Display dominant skill */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Your Dominant Skill: <span className="text-blue-500">{skill}</span>
        </h1>

        {/* Display suggested careers */}
        <p className="text-xl text-gray-700 mb-4">Suggested Career Paths:</p>
        <div className="bg-blue-100 p-6 rounded-lg mb-6">
          <p className="text-lg font-medium text-gray-800">{suggestion}</p>
        </div>

        {/* How to enhance the dominant skill */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Enhance Your {skill}</h2>
        <p className="text-gray-700 mb-6">
          Based on your responses, you excel in {skill} and should consider roles in the suggested career paths. To enhance your {skill}, consider taking courses or engaging in projects that challenge you in this area.
        </p>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-lg">
          <p className="text-lg text-white font-semibold">Unlock Your Potential!</p>
          <p className="text-gray-100">The more you hone your skills, the closer you'll get to reaching your career goals.</p>
        </div>

        {/* Try Again button */}
        <div className="text-center mt-6">
          <button
            onClick={handleTryAgain} // Trigger the try again functionality from CareerTest
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
