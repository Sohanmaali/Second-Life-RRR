import { useEffect, useState } from "react";
import { FormContext } from "./FormContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import axios from "axios";
import classNames from "classnames";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addScrapProduct } from "../../features/Product";

import { selectIsLoggedIn } from "../../features/authSlice";

function AddProduct() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  console.log("is login add product" + isLoggedIn);

  useEffect(() => {
    if (typeof isLoggedIn === "undefined" || !isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    scrapCondition: "",
    status: "",
    price: "",
    thumbnail: "",
    date: "",
    category: "",
    shippingCost: "",
    images: [],
    address: {
      city: "",
      pincode: "",
      state: "",
      landMark: "",
      streetAddress: "",
    },
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      // Retrieve token from session storage
      const token = sessionStorage.getItem("token");
      // let token;

      // Check if token exists
      if (!token) {
        // Handle case where token is missing
        toast.error("Token is missing!");
        return;
      }

      // Set up headers with the token
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      console.log(productData);
      console.log(headers);
      // Send POST request with headers
      dispatch(addScrapProduct(productData));
      await axios.post(
        "http://localhost:8080/auth/user/add-scrap-product",

        productData,
        {
          headers,
        }
      );

      // Display success message
      toast.success("Product Added");
    } catch (error) {
      // Handle error
      toast.error("Error adding product!");
    }
  };

  const contextValues = {
    step,
    productData,
    setProductData,
    handleNextStep,
    handlePreviousStep,
    handleSubmit,
  };
  const steper = [
    { step: 1, ditail: "Add Product Ditail" },
    { step: 2, ditail: "Add Product Images" },
    { step: 3, ditail: "Add Product Address" },
    { step: 4, ditail: "Show insert ditail" },
  ];
  return (
    <FormContext.Provider value={contextValues}>
      <div className="bg-slate-600 w-full lg:h-[850px]  pb-6">
        {/* <div className=" w-full h-[850px] pb-6 bg-slate-600"> */}
        <div className="flex justify-center md:pt-10 relative">
          <div className="flex flex-col md:flex-row gap-12  md:p-4 rounded-xl lg:h-[800px]  lg:w-11/12 w-screen   bg-orange-800">
            <div className="w-screen bg-imgMobile md:bg-imgDesktop absolute md:relative top-0 left-0 md:w-1/5 md:h-full bg-no-repeat bg-cover pb-12 z-0">
              <div className="flex md:flex-col gap-8 justify-center md:pl-4 lg:pl-12  p-6 md:pt-14">
                {steper.map((s) => (
                  <div className="flex gap-2" key={s.step}>
                    <div
                      className={classNames(
                        "h-8 w-8 rounded-[50%] border flex justify-center items-center text-slate-50 text-sm",
                        {
                          "bg-lime-100 text-slate-950 font-bold":
                            step === s.step,
                        }
                      )}
                    >
                      {s.step}
                    </div>
                    <div>
                      <p className="hidden md:block text-sm font-bold">
                        {`STEP ${s.step}`}
                      </p>
                      <p className="hidden md:block text-sm text-slate-400">
                        {s.ditail} {s.step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-black rounded-lg bg-white px-3 pt-2 md:pt-12 w-full md:w-2/3 pr-4 mt-20 md:mt-2 z-20">
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              {step === 4 && <Step4 />}
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </FormContext.Provider>
  );
}

export default AddProduct;
