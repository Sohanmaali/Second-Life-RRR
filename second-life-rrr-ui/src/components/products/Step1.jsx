import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "./FormContext";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  selectCategoryDetails,
} from "../../features/categoriesSlice";

const Step1 = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const categoryDetails = useSelector(selectCategoryDetails);

  useEffect(() => {
    dispatch(fetchCategories());
    setCategory(categoryDetails.map((item) => item.categoriesName));
    setLoading(false);
  }, [dispatch]);
  console.log("categoryDetails  ", categoryDetails);

  const productDetails = [
    { name: "productName", label: "Product Name", type: "text" },
    { name: "description", label: "Description", type: "text" },
    {
      name: "scrapCondition",
      label: "Scrap Condition",
      type: "select",
      options: ["GOOD", "VERY_GOOD", "EXCELLENT"],
    },
    { name: "price", label: "Price", type: "number" },
    { name: "productThumbnail", label: "Thumbnail", type: "file" },
    { name: "date", label: "Date", type: "date" },
    {
      name: "category",
      label: "Category",
      type: "select",
      options: category,
    },
    { name: "shippingCost", label: "Shipping Cost", type: "number" },
  ];

  // ===============================================
  const { productData, setProductData, handleNextStep } =
    useContext(FormContext);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    if (type === "file") {
      setProductData({ ...productData, [name]: files[0] });
    } else {
      setProductData({ ...productData, [name]: value });
    }
    if (emptyFields.includes(name)) {
      setEmptyFields(emptyFields.filter((field) => field !== name));
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
    for (const field of productDetails) {
      if (!productData[field.name]) {
        empty.push(field.name);
      }
    }
    setEmptyFields(empty);
    return empty.length === 0;
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {categoryDetails && (
        <div className="px-4  pb-10">
          <h3 className="text-black text-3xl font-bold">Product Info</h3>
          <form onSubmit={handleSubmit} className="pt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {productDetails.map((field) => (
                <div className="mb-4" key={field.name}>
                  {field.type === "select" ? (
                    <div className="relative z-0 w-full  group">
                      <select
                        onChange={handleChange}
                        value={productData[field.name] || ""}
                        name={field.name}
                        id={field.name}
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none ${
                          emptyFields.includes(field.name)
                            ? "border-red-500"
                            : "border-gray-300 dark:border-gray-600"
                        }  dark:focus:border-customYellow focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                      >
                        <option value="" disabled>
                          {emptyFields.includes(field.name)
                            ? `Please select ${field.label.toLowerCase()}`
                            : `Select ${field.label.toLowerCase()}`}
                        </option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {emptyFields.includes(field.name) && (
                        <p className="text-red-500 text-sm mt-1">
                          {field.label} is required
                        </p>
                      )}
                      <label
                        htmlFor={field.name}
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {field.label}
                      </label>
                    </div>
                  ) : (
                    <div className="relative z-0 w-full  group">
                      <input
                        onChange={handleChange}
                        value={
                          field.type === "file"
                            ? undefined
                            : productData[field.name] || ""
                        }
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
                      {emptyFields.includes(field.name) && (
                        <p className="text-red-500 text-sm mt-1">
                          {field.label} is required
                        </p>
                      )}
                      <label
                        htmlFor={field.name}
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {field.label}
                      </label>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="mt-8 py-2 px-5 rounded-md bg-sky-700 text-slate-100 text-base "
            >
              Next Step
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Step1;
