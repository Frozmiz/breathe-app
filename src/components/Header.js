import React, { useState } from "react";
import Map from "./MapComponent";

const App = () => {
  const [showMap, setShowMap] = useState(false);

  const handleClick = () => {
    setShowMap(true); // SHOW MAP
  };

  return (
    <div className="app-container text-center py-16">
      <h1 className="text-6xl font-extrabold text-green-800">
        Find Your Breathe Point
      </h1>
      <p className="text-lg mt-4 text-gray-700">
        Explore the best nature spots to chill and clean your mind.
      </p>

      {/* Buttom */}
      <div className="mt-10">
        <button
          onClick={handleClick}
          className="relative group px-8 py-4 bg-gradient-to-r from-green-400 to-green-800 text-white font-bold text-lg rounded-full shadow-lg transition-transform duration-700 ease-in-out"
          style={{
            transition: "background-color 1.5s ease-in-out, transform 1.5s ease-in-out",
          }}
        >
          {/* LEFT SVG DECO  */}
          <span
            className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{
              filter: "drop-shadow(0px 2px 4px rgba(0, 128, 0, 0.7))",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-green-400 group-hover:text-green-600 transition-colors duration-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2C9.5 2 6.5 5 5.5 7.5C4.5 10 5.5 13 7.5 15C9.5 17 12 18 12 18C12 18 14.5 17 16.5 15C18.5 13 19.5 10 18.5 7.5C17.5 5 14.5 2 12 2ZM12 6C13 6 14 8 14 10C14 12 13 14 12 14C11 14 10 12 10 10C10 8 11 6 12 6Z"
              />
            </svg>
          </span>
          
          Let's Green 🍀
          {/* RIGHT SVG DECO */}
          <span
            className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{
              filter: "drop-shadow(0px 2px 4px rgba(0, 128, 0, 0.7))",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-green-400 group-hover:text-green-600 transition-colors duration-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2C9.5 2 6.5 5 5.5 7.5C4.5 10 5.5 13 7.5 15C9.5 17 12 18 12 18C12 18 14.5 17 16.5 15C18.5 13 19.5 10 18.5 7.5C17.5 5 14.5 2 12 2ZM12 6C13 6 14 8 14 10C14 12 13 14 12 14C11 14 10 12 10 10C10 8 11 6 12 6Z"
              />
            </svg>
          </span>
          
          <style>
            {`
              .group:hover {
                background: linear-gradient(to right, #fdfdc4, #ffef9f); /* Amarillo suave */
                transform: scale(1.1);
              }
            `}
          </style>
        </button>
      </div>

      {/* SHOW MAP IF ACTIVATED */}
      {showMap && (
        <div className="mt-12">
          <Map />
        </div>
      )}
    </div>
  );
};

export default App;
