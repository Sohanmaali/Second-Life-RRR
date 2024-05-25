import React, { useState } from "react";
import ProgressIndicator from "./ProgressIndicator";

const steps = ["Step 1", "Step 2", "Step 3", "Preview"];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    step1: "",
    step2: "",
    step3: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row">
      <ProgressIndicator steps={steps} currentStep={currentStep} />
      <form className="md:w-3/4 p-4" onSubmit={handleSubmit}>
        {currentStep === 0 && (
          <div>
            <label className="block mb-2">Step 1 Input</label>
            <input
              type="text"
              name="step1"
              value={formData.step1}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <label className="block mb-2">Step 2 Input</label>
            <input
              type="text"
              name="step2"
              value={formData.step2}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <label className="block mb-2">Step 3 Input</label>
            <input
              type="text"
              name="step3"
              value={formData.step3}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Review your details</h3>
            <p className="mb-2">
              <strong>Step 1:</strong> {formData.step1}
            </p>
            <p className="mb-2">
              <strong>Step 2:</strong> {formData.step2}
            </p>
            <p className="mb-2">
              <strong>Step 3:</strong> {formData.step3}
            </p>
          </div>
        )}
        <div className="mt-4 flex justify-between">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-300"
            >
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white"
            >
              Next
            </button>
          ) : (
            <button type="submit" className="px-4 py-2 bg-green-500 text-white">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
