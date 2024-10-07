import React from "react";

const LanguageModal = ({ onLanguageSelect }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 border-[#FFD700] border-2 rounded-lg p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#FFD700]">
          Select Language
        </h2>
        <button
          className="bg-[#FFD700] text-[#2E2E2E] px-4 py-2 rounded mr-4 font-semibold transition duration-300 hover:bg-[#e5c700]"
          onClick={() => onLanguageSelect("en")}
        >
          English
        </button>
        <button
          className="bg-[#FFD700] text-[#2E2E2E] px-4 py-2 rounded font-semibold transition duration-300 hover:bg-[#e5c700]"
          onClick={() => onLanguageSelect("ar")}
        >
          العربية
        </button>
      </div>
    </div>
  );
};

export default LanguageModal;
