import React from "react";

const ProgressIndicator = ({ steps, currentStep }) => {
  return (
    <div className="md:w-1/4 mb-4 md:mb-0">
      <div className="flex md:flex-col overflow-x-auto md:overflow-visible">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 py-2 px-4 text-center border-b-2 md:border-b-0 md:border-l-2 ${
              currentStep === index
                ? "border-blue-500 bg-blue-100"
                : "border-gray-300"
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
