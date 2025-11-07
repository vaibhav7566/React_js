import React from "react";
import { useNavigate } from "react-router";

const NF = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center">
      {/* 404 glowing text */}
      <h1 className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg animate-pulse">
        404
      </h1>

      {/* Subtitle */}
      <p className="text-2xl font-semibold mb-2">Oops! Page Not Found</p>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you’re looking for doesn’t exist or has been moved. But don’t
        worry — let’s get you back on track!
      </p>

      {/* Go Home Button */}
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white font-semibold hover:scale-105 transition-transform duration-200 shadow-lg"
      >
        Go Home
      </button>

      {/* Floating background circles for style */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 absolute top-10 left-10 animate-pulse"></div>
        <div className="w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 absolute bottom-10 right-10 animate-pulse"></div>
      </div>
    </div>
  );
};

export default NF;
