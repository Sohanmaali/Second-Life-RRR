import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";

const Step2 = () => {
  const { productData, setProductData, handleNextStep, handlePreviousStep } =
    useContext(FormContext);
  const [image, setImage] = useState("");

  const handleAddImage = () => {
    setProductData({ ...productData, images: [...productData.images, image] });
    setImage("");
  };

  return (
    <div className="px-4 mt-6 my-auto">
      <h3 className="text-black text-3xl font-bold">Add Images</h3>
      <div className="pt-12">
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-base font-medium leading-6 text-gray-900"
          >
            Image URL
          </label>
          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="file"
            name="image"
            id="image"
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter image URL"
          />
        </div>
        <button
          type="button"
          onClick={handleAddImage}
          className="mt-4 mb-8 py-2 px-5 rounded-md bg-sky-700 text-slate-100 text-base"
        >
          Add Image
        </button>
        <div>
          {productData.images.map((img, index) => (
            <div key={index} className="mb-4">
              <img
                src={img}
                alt={`product ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handlePreviousStep}
          className="mt-4 border py-2 px-5 rounded-md bg-transparent text-sky-700 text-base"
        >
          Go Back
        </button>
        <button
          onClick={handleNextStep}
          className="mt-4 float-right py-2 px-5 rounded-md bg-sky-700 text-slate-100 text-base"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2;
