import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";

const Step3 = () => {
  const addressDetails = [
    { name: "city", label: "City", type: "text" },
    { name: "pincode", label: "Pincode", type: "text" },
    { name: "state", label: "State", type: "text" },
    { name: "landMark", label: "Landmark", type: "text" },
    { name: "streetAddress", label: "Street Address", type: "text" },
  ];
  const [emptyFields, setEmptyFields] = useState([]);
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
    if (emptyFields.includes(e.target.name)) {
      setEmptyFields(emptyFields.filter((field) => field !== e.target.name));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleNextStep();
    }
  };

  const validateForm = () => {
    const empty = [];
    for (const field of addressDetails) {
      if (!productData.address[field.name]) {
        empty.push(field.name);
      }
    }
    setEmptyFields(empty);
    return empty.length === 0;
  };

  return (
    <div className="px-4  my-auto pb-10">
      <h3 className="text-black text-3xl font-bold">Address</h3>
      <form onSubmit={handleSubmit} className="pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addressDetails.map((field) => (
            <div className="mb-4" key={field.name}>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={handleChange}
                  value={productData.address[field.name] || ""}
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none ${
                    emptyFields.includes(field.name)
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }  dark:focus:border-customYellow focus:outline-none focus:ring-0 text-gray-900  focus:border-blue-600 peer`}
                  placeholder=""
                  style={
                    emptyFields.includes(field.name)
                      ? { borderColor: "red" }
                      : {}
                  }
                />
                <label
                  htmlFor={field.name}
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {field.label}
                </label>
                {emptyFields.includes(field.name) && (
                  <p className="text-red-500 text-sm mt-1">
                    {field.label} is required
                  </p>
                )}
              </div>
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
