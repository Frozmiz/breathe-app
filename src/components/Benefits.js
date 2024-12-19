import { LeafIcon, LeafIconBottomRight } from "./SVGIcons";

function Benefits() {
  return (
    <section className="bg-green-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font text-center text-green-800 mb-6">
          {" "}
          ~ You will get ~{" "}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <li className="bg-white p-6 rounded-lg shadow-lg relative">
            {/* DECO RIGHT */}
            <span className="absolute right-12">
              <LeafIcon
                style={{ width: "24px", height: "24px", color: "orange" }}
              ></LeafIcon>
            </span>
            <h3 className="text-xl font-semibold text-orange-700 flex items-center gap-2 mb-4">
              {" "}
              Reconnect with Nature{" "}
            </h3>
            <p className="text-gray-600">
              {" "}
              Clear your mind and reduce stress by surrounding yourself with
              green landscapes and fresh air. Immerse yourself in a peaceful
              environment that rejuvenates your body and soul.{" "}
            </p>
          </li>
          <li className="bg-white p-6 rounded-lg shadow-lg relative">
            {/* Hoja decorativa derecha inferior */}
            <span className="absolute right-12 bottom-3">
              <LeafIconBottomRight
                style={{ width: "24px", height: "24px", color: "orange" }}
              ></LeafIconBottomRight>
            </span>
            <h3 className="text-xl font-semibold text-orange-700 flex items-center gap-2 mb-4">
              Health and Wellness Boost
            </h3>
            <p className="text-gray-600">
              Enjoy outdoor activities that enhance your physical and mental
              well-being, from relaxing walks to meditation in nature.
              Connecting with natural settings can strengthen your immune system
              and increase happiness.
            </p>
          </li>
          <li className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-700 flex items-center gap-2 mb-4">
              Discover Unique Spots
            </h3>
            <p className="text-gray-600">
              Find hidden and special corners, perfect for disconnecting from
              the routine and exploring the best that nature has to offer. Each
              location is an opportunity to create unforgettable memories.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Benefits;
