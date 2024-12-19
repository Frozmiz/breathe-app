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
            {/* Hoja decorativa izquierda */}
            <span className="absolute right-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: "24px", height: "24px", color: "orange" }}
              >
                <defs>
                  <linearGradient
                    id="grad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "orange", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "red", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2C12 2 9 4 6 8C3 12 5 16 6 17C7 18 9 20 12 20C15 20 17 18 18 17C19 16 21 12 18 8C15 4 12 2 12 2Z"
                  fill="url(#grad1)"
                />
              </svg>
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
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  style={{ width: "24px", height: "24px", color: "orange" }}
>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: "orange", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "red", stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <path
    d="M12 2C9.5 2 6.5 5 5.5 7.5C4.5 10 5.5 13 7.5 15C9.5 17 12 18 12 18C12 18 14.5 17 16.5 15C18.5 13 19.5 10 18.5 7.5C17.5 5 14.5 2 12 2ZM12 6C13 6 14 8 14 10C14 12 13 14 12 14C11 14 10 12 10 10C10 8 11 6 12 6Z"
    fill="url(#grad1)"
  />
</svg>
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
