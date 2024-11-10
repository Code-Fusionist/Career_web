import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Logo from "./desk2.png";
import backgroundIm from "./Career.jpg"; // Import the background image

function LoginForm() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // GSAP animation
    const timer = setTimeout(() => {
      gsap.from(".form-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }, 0);

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, []);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    setIsChecked(false); // Reset checkbox state when toggling form
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if it's Sign Up or Login
    if (isSignUp) {
      // Handle sign up logic here
      console.log("Sign Up data:", formData);
      // If you want to handle actual sign up, you can call an API here
    } else {
      // Handle login logic here
      console.log("Login data:", formData);
      // If you want to handle actual login, you can call an API here
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4"
      style={{
        backgroundImage: `url(${backgroundIm})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="form-card bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row"
        style={{ maxHeight: "100vh" }}
      >
        {/* Welcome Section */}
        <div className="welcome-section flex flex-col justify-center items-center bg-gradient-to-b from-blue-600 to-blue-400 w-full md:w-1/2 text-white p-8">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Welcome to EDUNAVIGATOR</h1>
            <p className="text-sm mb-8">
              EDUNAVIGATOR is your trusted platform designed to guide you through the vast world of education. Whether you're looking for resources, guidance, or the best learning pathways, we're here to help you navigate the educational landscape with ease and confidence.
            </p>
            <img
              src={Logo}
              alt="Welcome Illustration"
              className="w-full max-w-md h-48 mt-4 object-contain"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="form-container w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            {isSignUp ? "Create Your Account" : "Login to Your Account"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {isSignUp && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">
                  By signing up, I agree with{" "}
                  <a href="#" className="text-blue-500 underline">
                    Terms & Conditions
                  </a>
                </span>
              </div>
            )}
            <div className="flex space-x-4 mt-6">
              <button
                type="submit"
                className={`w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors ${(!isChecked && isSignUp) ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={(!isChecked && isSignUp)} // Disable the button if not checked for sign up
              >
                {isSignUp ? "Sign Up" : "Log In"}
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button
              onClick={toggleForm}
              className="text-blue-500 ml-1 underline"
            >
              {isSignUp ? "Log In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;