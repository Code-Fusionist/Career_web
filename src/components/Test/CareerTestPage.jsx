import React, { useEffect } from "react";
import { gsap } from "gsap";
import HeroImage from "./test.jpg";
import AboutImage from "./test.jpg";

function CareerTestPage() {
  useEffect(() => {
    gsap.from(".fade-in", { opacity: 0, duration: 2, y: -50, stagger: 0.3 });
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 bg-cover bg-center relative" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight fade-in text-yellow-500">
            Not Sure About Your Career Path?
          </h1>
          <p className="mt-4 text-xl md:text-2xl fade-in text-gray-300">
            Discover your strengths, interests, and ideal career with our expert-designed career guidance test.
          </p>
          <button className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400 fade-in">
            Start Your Career Test Now
          </button>
        </div>
      </section>

      {/* About the Career Test Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold fade-in">About Our Career Guidance Test</h2>
          <p className="mt-6 text-lg md:text-xl fade-in text-gray-300 max-w-3xl mx-auto">
            Our career test is designed by top educators and career specialists to help you find the career path that best suits your talents, interests, and personality. Whether you're a student or a professional seeking clarity, this test will provide valuable insights and actionable recommendations to help you confidently plan your future.
          </p>
          <div className="mt-8 space-y-4 text-left fade-in">
            <ul className="text-gray-300">
              <li className="text-lg">Identify your strengths and unique skills</li>
              <li className="text-lg">Receive personalized career path suggestions</li>
              <li className="text-lg">Get guidance on setting achievable goals</li>
              <li className="text-lg">Understand areas of improvement for career growth</li>
            </ul>
          </div>
          <button className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400 fade-in">
            Take the Test
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold fade-in text-yellow-500">How the Test Works</h2>
          <div className="mt-8 space-y-4 text-left fade-in text-gray-300">
            <ol className="list-decimal pl-8">
              <li><strong className="text-lg">Step 1:</strong> Complete the Assessment</li>
              <li><strong className="text-lg">Step 2:</strong> Get Instant Feedback</li>
              <li><strong className="text-lg">Step 3:</strong> Explore Your Options</li>
            </ol>
          </div>
          <button className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400 fade-in">
            Begin Assessment
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-700">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold fade-in text-yellow-500">Why Choose Our Career Test?</h2>
          <div className="mt-8 space-y-4 text-left fade-in text-gray-300">
            <ul>
              <li className="text-lg">Expert-Designed: Created by experienced educators and career specialists.</li>
              <li className="text-lg">Personalized Results: Tailored career suggestions based on your unique responses.</li>
              <li className="text-lg">User-Friendly: Easy-to-complete test with insightful outcomes.</li>
              <li className="text-lg">Comprehensive Insights: Detailed report to help you plan and set achievable goals.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results & Recommendations Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold fade-in text-yellow-500">What You Get</h2>
          <p className="mt-4 text-lg fade-in text-gray-300">After completing the test, you'll receive a personalized report including:</p>
          <div className="mt-8 space-y-4 text-left fade-in text-gray-300">
            <ul>
              <li className="text-lg">Strengths Analysis: Highlights your key skills and interests.</li>
              <li className="text-lg">Career Path Suggestions: Recommendations on fields that align with your profile.</li>
              <li className="text-lg">Goal Setting Guidance: Expert tips on setting career goals.</li>
              <li className="text-lg">Roadmap for Success: A suggested plan to help you reach your career aspirations.</li>
            </ul>
          </div>
          <button className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400 fade-in">
            Get Started
          </button>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-16 bg-gray-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold fade-in text-yellow-500">Your Privacy Matters to Us</h2>
          <p className="mt-4 text-lg fade-in text-gray-300">All responses are completely confidential and used solely to provide accurate career guidance.</p>
          <p className="mt-4 text-lg fade-in text-gray-300">Your data is protected under our strict privacy policy and is never shared with third parties.</p>
          <a href="/privacy-policy" className="text-yellow-500 text-lg font-semibold fade-in hover:underline">Read Our Privacy Policy</a>
        </div>
      </section>
    </div>
  );
}

export default CareerTestPage;
