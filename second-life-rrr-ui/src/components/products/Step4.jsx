import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { addScrapProduct } from "../../features/scrapProductSlice";

const Step4 = () => {
  const { productData, handlePreviousStep, setStep } = useContext(FormContext);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const productDetails = [
    { name: "Product Name", data: productData.productName },
    { name: "Description", data: productData.description },
    { name: "Product Condition", data: productData.scrapCondition },
    { name: "Product Price", data: productData.price },
    { name: "Product Category", data: productData.category },
    { name: "Product Shipping Cost", data: productData.shippingCost },
  ];

  const addressDetails = [
    { name: "City", data: productData.address.city },
    { name: "Pincode", data: productData.address.pincode },
    { name: "State Condition", data: productData.address.state },
    { name: "Landmark", data: productData.address.landMark },
    { name: "Street", data: productData.address.streetAddress },
  ];

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(productData));
      formData.append("productThumbnail", productData.productThumbnail);

      for (const image of productData.images) {
        formData.append("images", image);
      }

      await dispatch(addScrapProduct(formData));
      setStep(1);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 my-auto pb-10">
      <h3 className="text-black text-3xl font-bold">Review & Submit</h3>
      <div className="pt-12">
        {/* Product Details */}
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Product Details
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This is some information about the user.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              {productDetails.map((item, index) => (
                <div
                  className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  key={index}
                >
                  <dt className="text-sm font-medium text-gray-500">
                    {item.name}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {item.data}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        {/* Address Details */}
        <div className="bg-white overflow-hidden shadow rounded-lg border mt-5">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Address Details
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This is some information about the user.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              {addressDetails.map((item, index) => (
                <div
                  className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  key={index}
                >
                  <dt className="text-sm font-medium text-gray-500">
                    {item.name}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {item.data}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        {/* Image Details */}
        <div className="bg-white overflow-hidden shadow rounded-lg border mt-5">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Images
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This is some information about the user.
            </p>
          </div>
          <hr />
          <div className="flex flex-col justify-center p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto rounded-xl ">
              {productData.images.map((img, index) => (
                <div key={index} className="relative mb-4 border rounded-xl">
                  <div
                    className="image-container shadow-md shadow-[#ff3233] rounded-xl"
                    style={{ height: "300px" }}
                  >
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`product ${index}`}
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handlePreviousStep}
          className="mt-4 border py-2 px-5 rounded-md bg-transparent text-sky-700 text-base"
        >
          Go Back
        </button>
        <button
          onClick={handleFormSubmit}
          disabled={isLoading}
          className="mt-4 float-right py-2 px-5 rounded-md bg-sky-700 text-slate-100 text-base"
        >
          {isLoading ? <Loader /> : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Step4;
