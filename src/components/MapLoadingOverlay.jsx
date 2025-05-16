import React, { useEffect, useState } from "react";

const messages = [
    "Breathing in the green...",
    "Scanning nature’s gifts...",
    "Tuning into tranquility...",
    "Looking for hidden trails..."
];

const MapLoadingOverlay = ({ loading, parksCount }) => {
    const [messageIndex, setMessageIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!loading && parksCount > 0) {
            const timer = setTimeout(() => setVisible(false), 500); // animación de salida
            return () => clearTimeout(timer);
        }
    }, [loading, parksCount]);

    if (!visible) return null;

    return (
        <div className={`fixed inset-0 flex flex-col items-center justify-center z-50 text-green-800
      transition-opacity duration-500 ease-in-out ${!loading ? "opacity-0" : "opacity-100"}
      bg-green-50 bg-opacity-90`}>
            <svg
                className="animate-spin h-10 w-10 text-green-600 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                ></path>
            </svg>
            <h2 className="text-lg font-semibold mb-1">Finding nearby parks…</h2>
            <p className="text-sm italic">{messages[messageIndex]}</p>
            {parksCount > 0 && (
                <p className="text-sm mt-3">🌳 {parksCount} parks loaded in your area</p>
            )}
        </div>
    );
};

export default MapLoadingOverlay;
