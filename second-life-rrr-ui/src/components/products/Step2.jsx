import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";
import { toast } from "react-toastify";

const Step2 = () => {
  const { productData, setProductData, handleNextStep, handlePreviousStep } =
    useContext(FormContext);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  const handleAddImage = () => {
    if (image) {
      setProductData({
        ...productData,
        images: [...productData.images, image],
      });
      setImage(null);
      setImageName("");
    }
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile);
      setImageName(selectedFile.name);
      e.target.value = null; // Reset file input
    }
  };

  const handleDeleteImage = (index) => {
    const newImages = productData.images.filter(
      (_, imgIndex) => imgIndex !== index
    );
    setProductData({ ...productData, images: newImages });
  };

  const validateImageCount = () => {
    const imageCount = productData.images.length;
    if (imageCount < 1) {
      toast.error("Please upload a minimum of 3 images.");
      return true;
    }
    return true;
  };

  const handleNextStepWithValidation = () => {
    if (validateImageCount()) {
      handleNextStep();
    }
  };

  return (
    <div className="px-4 my-auto">
      <h3 className="text-black text-3xl font-bold">Add Images</h3>
      <div className="pt-12 pb-10">
        <div className="mb-4">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="mb-2 text-gray-500 dark:text-gray-400 text-center">
                  <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG, or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                onChange={handleImageChange}
                type="file"
                name="image"
                id="dropzone-file"
                className="hidden"
              />
            </label>
          </div>
          {imageName && (
            <p className="text-sm text-gray-600 mt-2">
              Selected Image: {imageName}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={handleAddImage}
          className="mt-4 mb-8 py-2 px-5 rounded-md bg-sky-700 text-slate-100 text-base"
        >
          Add Image
        </button>
        {/* Show Images */}
        <div className="flex flex-col justify-center p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto rounded-xl">
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
                <button
                  type="button"
                  onClick={() => handleDeleteImage(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePreviousStep}
          className="mt-4 border py-2 px-5 rounded-md bg-transparent text-sky-700 text-base"
        >
          Go Back
        </button>
        <button
          onClick={handleNextStepWithValidation}
          className="mt-4 float-right py-2 px-5 rounded-md bg-sky-700 text-slate-100 text-base"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2;
