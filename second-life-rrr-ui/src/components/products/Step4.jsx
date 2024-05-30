import React, { useContext } from "react";
import { FormContext } from "./FormContext";

const Step4 = () => {
  const { productData, handlePreviousStep, handleSubmit } =
    useContext(FormContext);

  return (
    <div className="px-4 mt-6 my-auto">
      <h3 className="text-black text-3xl font-bold">Review & Submit</h3>
      <div className="pt-12">
        <h4 className="text-xl font-bold mb-4">Product Details</h4>
        <p>
          <strong>Product Name:</strong> {productData.productName}
        </p>
        <p>
          <strong>Description:</strong> {productData.description}
        </p>
        <p>
          <strong>Scrap Condition:</strong> {productData.scrapCondition}
        </p>
        <p>
          <strong>Status:</strong> {productData.status}
        </p>
        <p>
          <strong>Price:</strong> {productData.price}
        </p>
        <p>
          <strong>Thumbnail:</strong> {productData.thumbnail}
        </p>
        <p>
          <strong>Date:</strong> {productData.date}
        </p>
        <p>
          <strong>Category:</strong> {productData.category}
        </p>
        <p>
          <strong>Shipping Cost:</strong> {productData.shippingCost}
        </p>
        <h4 className="text-xl font-bold mt-6 mb-4">Images</h4>
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
        <h4 className="text-xl font-bold mt-6 mb-4">Address</h4>
        <p>
          <strong>City:</strong> {productData.address.city}
        </p>
        <p>
          <strong>Pincode:</strong> {productData.address.pincode}
        </p>
        <p>
          <strong>State:</strong> {productData.address.state}
        </p>
        <p>
          <strong>Landmark:</strong> {productData.address.landMark}
        </p>
        <p>
          <strong>Street Address:</strong> {productData.address.streetAddress}
        </p>
        <button
          onClick={handlePreviousStep}
          className="mt-4 border py-2 px-5 rounded-md bg-transparent text-sky-700 text-base"
        >
          Go Back
        </button>
        <button
          onClick={handleSubmit}
          className="mt-4 float-right py-2 px-5 rounded-md bg-sky-700 text-slate-100 text-base"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
