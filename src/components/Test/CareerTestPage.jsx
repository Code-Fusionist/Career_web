import React, { useEffect } from "react";
import { gsap } from "gsap";

const CareerTestPage = () => {
  useEffect(() => {
    gsap.fromTo(".hero-section", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(".about-section", { x: -100 }, { x: 0, duration: 1.2, delay: 0.5 });
    gsap.fromTo(".how-it-works-section", { x: 100 }, { x: 0, duration: 1.2, delay: 0.5 });
    gsap.fromTo(".features-section", { y: 100 }, { y: 0, duration: 1.2, delay: 0.5 });
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-12 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-between bg-gray-900 text-white p-16 rounded-lg shadow-lg overflow-hidden">
        <div className="text-section max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Find Your Ideal Career Path Today</h1>
          <p className="text-lg mb-6">
            Discover your strengths, interests, and ideal career with our expert-designed career guidance test. Take the first step towards a fulfilling career.
          </p>
          <ul className="list-disc list-inside mb-6 text-left">
            <li>Gain personalized insights tailored to your unique profile</li>
            <li>Get recommendations for career paths that align with your skills and interests</li>
            <li>Set achievable career goals with expert guidance</li>
          </ul>
          <button className="bg-gray-900 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg transform transition-all duration-300">
            Start Your Career Test Now
          </button>
        </div>
        <div className="image-section">
          <img
            src="https://via.placeholder.com/600x400/3b82f6/ffffff?text=Career+Guidance+Test"
            alt="Career Test Hero"
            className="w-1/2 h-auto rounded-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section flex items-center justify-between bg-white p-16 rounded-lg shadow-lg text-center">
        <div className="text-section max-w-lg">
          <h2 className="text-3xl font-semibold mb-6">Designed for Your Success: Career Guidance Test</h2>
          <p className="text-lg mb-6">
            Our career test is tailored by professionals to help you uncover the best path suited for your skills, interests, and future aspirations. Whether you're just starting out or looking to pivot, this test gives you the insight you need.
          </p>
          <ul className="list-disc list-inside mb-6 text-left">
            <li>Identify your strengths and unique skills</li>
            <li>Receive personalized career path suggestions</li>
            <li>Get guidance on setting achievable goals</li>
            <li>Understand areas of improvement for career growth</li>
          </ul>
          <button className="bg-gray-900 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg transform transition-all duration-300">
            Take the Test
          </button>
        </div>
        <div className="image-section">
          <img
            src="https://via.placeholder.com/600x400/6b7280/ffffff?text=About+Career+Test"
            alt="About Career Test"
            className="w-1/2 h-auto rounded-lg"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section flex items-center justify-between bg-gray-800 p-16 rounded-lg shadow-lg text-center">
        <div className="text-section max-w-lg">
          <h2 className="text-3xl font-semibold mb-6">How the Test Works</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center max-w-xs">
              <div className="bg-gray-900 text-gray-800 p-6 rounded-full mb-4 shadow-lg">
                <span className="text-4xl">1</span>
              </div>
              <p className="font-semibold mb-4">Complete the Assessment</p>
              <p className="text-sm text-gray-600">Answer a series of questions designed to uncover your interests, skills, and values.</p>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <div className="bg-gray-900 text-white p-6 rounded-full mb-4 shadow-lg">
                <span className="text-4xl">2</span>
              </div>
              <p className="font-semibold mb-4">Get Instant Feedback</p>
              <p className="text-sm text-gray-600">Receive a comprehensive report with an analysis of your strengths and recommended career paths.</p>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <div className="bg-gray-900 text-white p-6 rounded-full mb-4 shadow-lg">
                <span className="text-4xl">3</span>
              </div>
              <p className="font-semibold mb-4">Explore Your Options</p>
              <p className="text-sm text-gray-600">Review personalized suggestions and set goals aligned with your profile.</p>
            </div>
          </div>
          <button className="bg-gray-900 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg transform transition-all duration-300 mt-8">
            Begin Assessment
          </button>
        </div>
        <div className="image-section">
          <img
            src="https://via.placeholder.com/600x400/9CA3AF/ffffff?text=How+It+Works"
            alt="How It Works"
            className="w-1/2 h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section flex items-center justify-between bg-white p-16 rounded-lg shadow-lg text-center">
        <div className="text-section max-w-lg">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Our Career Test?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-gray-900 text-white p-6 rounded-full mb-4 shadow-lg">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Expert-Designed</h3>
              <p className="text-sm text-gray-600">Created by experienced educators and career specialists.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-900 text-white p-6 rounded-full mb-4 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Personalized Results</h3>
              <p className="text-sm text-gray-600">Tailored career suggestions based on your unique responses.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-900 text-white p-6 rounded-full mb-4 shadow-lg">
                <span className="text-2xl">👌</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">User-Friendly</h3>
              <p className="text-sm text-gray-600">Easy-to-complete test with insightful outcomes.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-900 text-white p-6 rounded-full mb-4 shadow-lg">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Comprehensive Insights</h3>
              <p className="text-sm text-gray-600">Detailed report to help you plan and set achievable goals.</p>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img
            src="https://via.placeholder.com/600x400/F3F4F6/ffffff?text=Features"
            alt="Features"
            className="w-1/2 h-auto rounded-lg"
          />
        </div>
      </section>

      {/* What You Get Section */}
      <section className="what-you-get bg-gray-100 p-16 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold mb-6">Personalized Results and Actionable Insights</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          After completing the test, you'll receive a personalized report including:
        </p>
        <ul className="list-disc list-inside mb-6 text-left mx-auto max-w-xl">
          <li>Strengths Analysis: Highlights your key skills and interests.</li>
          <li>Career Path Suggestions: Recommendations on fields that align with your profile.</li>
          <li>Goal Setting Guidance: Expert tips on setting career goals.</li>
          <li>Roadmap for Success: A suggested plan to help you reach your career aspirations.</li>
        </ul>
        <button className="bg-gray-900 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg transform transition-all duration-300">
          Get Your Report Now
        </button>
      </section>
    </div>
  );
};

export default CareerTestPage;