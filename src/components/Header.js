import { useState } from "react";
<<<<<<< HEAD
import Map from "./Map";

const App = () => {
  const [showMap, setShowMap] = useState(false);

  const handleClick = () => {
    setShowMap(true); // Show map when clicked
  };

  return (
    <div className="app-container text-center py-16">
      <h1 className="text-6xl font-extrabold text-green-800">
        Find Your Breathe Point
      </h1>
      <p className="text-lg mt-4 text-gray-700">
        Explore the best nature spots to chill and clean your mind.
      </p>

      {/* Button */}
      <div className="mt-10">
        <button
          onClick={handleClick}
          className="relative group px-8 py-4 bg-gradient-to-r from-green-400 to-green-800 text-white font-bold text-lg rounded-full shadow-lg transition-transform duration-700 ease-in-out"
          style={{
            transition: "background-color 1.5s ease-in-out, transform 1.5s ease-in-out",
          }}
        >
          {/* Left SVG deco */}
          <span
            className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{
              filter: "drop-shadow(0px 2px 4px rgba(0, 128, 0, 0.7))",
            }}
          >
=======
import MapComponent from "./MapComponent";

function Header() {
  const [showMap, setShowMap] = useState(false);

  return (
    <header className="text-center py-16 bg-gradient-to-r from-green-400 via-green-600 to-green-800 text-white">
      <h1 className="text-6xl font-extrabold">Find Your Breathe Point</h1>
      <p className="text-lg mt-4">
        Explore your best nature spot to chill and clean your mind.
      </p>
      <div className="mt-8 relative inline-block">
        <button
          className="relative mt-8 px-6 py-3 bg-white text-green-800 rounded-lg shadow-lg hover:bg-yellow-200 transition duration-500 ease-in"
          onClick={() => setShowMap(!showMap)}
        >
          {/* Decoraciones con hojas SVG */}
          <span className="absolute left-[-20px] top-[-10px]">
>>>>>>> 8814e53e651b1a0a3fcedc5aa289e1ba2292fdd9
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
<<<<<<< HEAD
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

          {/* Right SVG deco */}
          <span
            className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{
              filter: "drop-shadow(0px 2px 4px rgba(0, 128, 0, 0.7))",
            }}
          >
=======
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-green-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12.5C21 6.149 15.851 2 12 2S3 6.149 3 12.5a10.383 10.383 0 004.553 8.5c-1.618-4.376-.343-8.78 3.447-10.82 1.447-1.254 3.383-1.683 5.019-1.244a10.383 10.383 0 014.981 7.064zM12 3.5c2.204 0 7.1 1.795 7.1 9a9.267 9.267 0 01-7.1 9 9.267 9.267 0 01-7.1-9c0-7.205 4.896-9 7.1-9z"
              />
            </svg>
          </span>
          Let's green 🍀
          <span className="absolute right-[-20px] bottom-[-10px]">
>>>>>>> 8814e53e651b1a0a3fcedc5aa289e1ba2292fdd9
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
<<<<<<< HEAD
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
                background: linear-gradient(); 
                transform: scale(1.1);
              }
            `}
          </style>
        </button>
      </div>

      {/* Show map if enabled */}
      {showMap && (
        <div className="mt-12">
          <Map />
        </div>
      )}
    </div>
  );
};

export default App;
=======
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-green-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12.5C21 6.149 15.851 2 12 2S3 6.149 3 12.5a10.383 10.383 0 004.553 8.5c-1.618-4.376-.343-8.78 3.447-10.82 1.447-1.254 3.383-1.683 5.019-1.244a10.383 10.383 0 014.981 7.064zM12 3.5c2.204 0 7.1 1.795 7.1 9a9.267 9.267 0 01-7.1 9 9.267 9.267 0 01-7.1-9c0-7.205 4.896-9 7.1-9z"
              />
            </svg>
          </span>
        </button>
      </div>

      {showMap && (
        <div className="mt-8">
          <MapComponent />
        </div>
      )}
    </header>
  );
}

export default Header;
>>>>>>> 8814e53e651b1a0a3fcedc5aa289e1ba2292fdd9
