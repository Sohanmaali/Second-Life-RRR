// Step2.js
import React from "react";

export default function Step2({ step, currentStep, formData, setFormData }) {
  if (currentStep !== step) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, price: e.target.value });
  };

  return (
    <div>
      <h2>Step 2</h2>
      <input
        type="number"
        placeholder="Price"
        value={formData.price || ""}
        onChange={handleChange}
      />
    </div>
  );
}
