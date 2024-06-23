import React, { useState } from "react";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";

export default function Password() {
  const [formType, setFormType] = useState(true);
  return (
    <>
      <div className="">
        <div className=" sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg ">
            <div className="container mx-auto">
              <div className="flex justify-center  ">
                <div className="w-full xl:w-3/1 lg:w-11/12 flex  gap-6">
                  <div
                    className="w-full h-auto  hidden lg:block lg:w-1/2 bg-cover rounded-l-lg items-center justify-center"
                    // style={{
                    //   backgroundImage: `url(${process.env.PUBLIC_URL}/forgot-password.png)`,
                    // }}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/forgot-password.png`}
                      alt="img"
                      className=""
                    />
                  </div>

                  <div className="w-full lg:w-1/2  rounded-lg lg:rounded  bg-slate-100 pb-10">
                    <div className="lg:px-8 mb-4 text-center">
                      <h3 className="pt-4 mb-2 text-2xl">
                        {formType ? "Change" : "Forgot"} Your Password?
                      </h3>
                      <p className="mb-4 text-sm text-gray-700">
                        We get it, stuff happens. Just enter your email address
                        below and we'll send you a code to reset your password!
                      </p>
                    </div>
                    {formType ? <ChangePassword /> : <ForgotPassword />}

                    {/* <ForgotPassword /> */}
                    <div className="px-10 text-right mt-4">
                      <button
                        onClick={() => setFormType(!formType)}
                        className="text-sky-700"
                      >
                        {formType ? "Forgot Password ?" : "Change Password ?"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
