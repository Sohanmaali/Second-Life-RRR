import React, { useContext } from "react";
import { FormContext } from "./FormContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Step3 = () => {
  const { productData, setProductData, handleNextStep, handlePreviousStep } =
    useContext(FormContext);

  const handleChange = (e) => {
    setProductData({
      ...productData,
      address: {
        ...productData.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleNextStep();
    } else {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const validateForm = () => {
    for (const field of [
      "city",
      "pincode",
      "state",
      "landMark",
      "streetAddress",
    ]) {
      if (!productData.address[field]) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="px-4 mt-6 my-auto">
      <h3 className="text-black text-3xl font-bold">Address</h3>
      <form onSubmit={handleSubmit} className="pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "city", label: "City", type: "text" },
            { name: "pincode", label: "Pincode", type: "text" },
            { name: "state", label: "State", type: "text" },
            { name: "landMark", label: "Landmark", type: "text" },
            { name: "streetAddress", label: "Street Address", type: "text" },
          ].map((field) => (
            <div className="mb-4" key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-base font-medium leading-6 text-gray-900"
              >
                {field.label}
              </label>
              <input
                onChange={handleChange}
                value={productData.address[field.name]}
                type={field.type}
                name={field.name}
                id={field.name}
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-10"
                placeholder={`Enter ${field.label.toLowerCase()}`}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handlePreviousStep}
          className="mt-4 border py-2 px-5 rounded-md bg-transparent text-sky-700 text-base"
        >
          Go Back
        </button>
        <button
          type="submit"
          className="mt-4 float-right py-2 px-5 rounded-md bg-sky-700 text-slate-100 text-base"
        >
          Next Step
        </button>
      </form>
    </div>
  );
};

export default Step3;
