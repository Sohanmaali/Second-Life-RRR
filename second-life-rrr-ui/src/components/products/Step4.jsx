// Step4.js
import React from "react";

export default function Step4({ step, currentStep, formData, setFormData }) {
  if (currentStep !== step) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  return (
    <div>
      <h2>Step 4</h2>
      <input type="file" onChange={handleChange} />
    </div>
  );
}
