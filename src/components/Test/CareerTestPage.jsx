import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import HeroImage from "./test.jpg";

function CareerTestPage() {
  // Scroll position for parallax effect
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section with Parallax */}
      <Parallax
        bgImage={HeroImage}
        strength={200}
        className="text-center py-16 bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight text-yellow-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Not Sure About Your Career Path?
          </motion.h1>
          <motion.p
            className="mt-4 text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            Discover your strengths, interests, and ideal career with our expert-designed career guidance test.
          </motion.p>
          <motion.button
            className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
          >
            Start Your Career Test Now
          </motion.button>
        </div>
      </Parallax>

      {/* About the Career Test Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            className="text-3xl font-bold text-yellow-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            About Our Career Guidance Test
          </motion.h2>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            Our career test is designed by top educators and career specialists to help you find the career path that best suits your talents, interests, and personality. Whether you're a student or a professional seeking clarity, this test will provide valuable insights and actionable recommendations to help you confidently plan your future.
          </motion.p>
          <div className="mt-8 space-y-4 text-left">
            <ul className="text-gray-300">
              <li className="text-lg">Identify your strengths and unique skills</li>
              <li className="text-lg">Receive personalized career path suggestions</li>
              <li className="text-lg">Get guidance on setting achievable goals</li>
              <li className="text-lg">Understand areas of improvement for career growth</li>
            </ul>
          </div>
          <motion.button
            className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
          >
            Take the Test
          </motion.button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            className="text-3xl font-bold text-yellow-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            How the Test Works
          </motion.h2>
          <div className="mt-8 space-y-4 text-left">
            <ol className="list-decimal pl-8">
              <li><strong className="text-lg">Step 1:</strong> Complete the Assessment</li>
              <li><strong className="text-lg">Step 2:</strong> Get Instant Feedback</li>
              <li><strong className="text-lg">Step 3:</strong> Explore Your Options</li>
            </ol>
          </div>
          <motion.button
            className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
          >
            Begin Assessment
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-700">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            className="text-3xl font-bold text-yellow-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Why Choose Our Career Test?
          </motion.h2>
          <div className="mt-8 space-y-4 text-left">
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
          <motion.h2
            className="text-3xl font-bold text-yellow-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            What You Get
          </motion.h2>
          <p className="mt-4 text-lg text-gray-300">After completing the test, you'll receive a personalized report including:</p>
          <div className="mt-8 space-y-4 text-left">
            <ul>
              <li className="text-lg">Strengths Analysis: Highlights your key skills and interests.</li>
              <li className="text-lg">Career Path Suggestions: Recommendations on fields that align with your profile.</li>
              <li className="text-lg">Goal Setting Guidance: Expert tips on setting career goals.</li>
              <li className="text-lg">Roadmap for Success: A suggested plan to help you reach your career aspirations.</li>
            </ul>
          </div>
          <motion.button
            className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-16 bg-gray-900 text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-xl font-semibold text-gray-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Your Privacy Matters
          </motion.h2>
          <p className="mt-4 text-lg text-gray-300">
            We value your privacy. All your responses are strictly confidential and used solely for generating your personalized career report.
          </p>
        </div>
      </section>
    </div>
  );
}

export default CareerTestPage;
