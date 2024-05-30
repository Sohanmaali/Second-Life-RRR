import React, { useContext } from "react";
import { FormContext } from "./FormContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Step1 = () => {
  const { productData, setProductData, handleNextStep } =
    useContext(FormContext);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
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
    for (const field of Object.keys(productData)) {
      if (!productData[field]) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="px-4 mt-3">
      <h3 className="text-black text-3xl font-bold">Product Info</h3>
      <form onSubmit={handleSubmit} className="pt-5" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "productName", label: "Product Name", type: "text" },
            { name: "description", label: "Description", type: "text" },
            { name: "scrapCondition", label: "Scrap Condition", type: "text" },
            { name: "status", label: "Status", type: "text" },
            { name: "price", label: "Price", type: "number" },
            { name: "thumbnail", label: "Thumbnail", type: "text" },
            { name: "date", label: "Date", type: "date" },
            { name: "category", label: "Category", type: "text" },
            { name: "shippingCost", label: "Shipping Cost", type: "number" },
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
                value={productData[field.name]}
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
          type="submit"
          className="mt-8 py-2 px-5 rounded-md bg-sky-700 text-slate-100 text-base"
        >
          Next Step
        </button>
      </form>
    </div>
  );
};

export default Step1;
