import { useState } from "react";
import Map from "./MapComponent";
import { LeafLeft, LeafRight } from "./SVGIcons";

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
            transition:
              "background-color 1.5s ease-in-out, transform 1.5s ease-in-out",
          }}
        >
          {/* LEFT SVG DECO  */}
          <span
            className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{
              filter: "drop-shadow(0px 2px 4px rgba(0, 128, 0, 0.7))",
            }}
          >
            {" "}
            <LeafLeft></LeafLeft>
          </span>
          Let's Green 🍀
          {/* RIGHT SVG DECO */}
          <span
            className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{
              filter: "drop-shadow(0px 2px 4px rgba(0, 128, 0, 0.7))",
            }}
          >
            <LeafRight></LeafRight>
          </span>
          <style>
            {`
              .group:hover {
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
