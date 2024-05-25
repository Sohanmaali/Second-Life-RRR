// Step3.js
import React from "react";

export default function Step3({ step, currentStep, formData, setFormData }) {
  if (currentStep !== step) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  return (
    <div>
      <h2>Step 3</h2>
      <input
        type="text"
        placeholder="Description"
        value={formData.description || ""}
        onChange={handleChange}
      />
    </div>
  );
}
