import { useState } from "react";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
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
