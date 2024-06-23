import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../features/authSlice.js";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [emptyFields, setEmptyFields] = useState([]);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState({});
  const dispatch = useDispatch();

  const changePassworddata = [
    { name: "currentPassword", type: "password", label: "Current Password" },
    { name: "newPassword", type: "password", label: "New Password" },
    { name: "confirmPassword", type: "password", label: "Confirm Password" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const newEmptyFields = [];

    changePassworddata.forEach((field) => {
      if (!formData[field.name]) {
        newEmptyFields.push(field.name);
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (
      formData.newPassword &&
      formData.confirmPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setEmptyFields(newEmptyFields);
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(
        changePassword({
          oldPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        })
      );
      // Reset form fields
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  const handleFocus = (field) => {
    setErrors({
      ...errors,
      [field]: "",
    });
    setEmptyFields(emptyFields.filter((f) => f !== field));
    // setActiveField(field);
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevShowPassword) => ({
      ...prevShowPassword,
      [field]: !prevShowPassword[field],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="pt-6">
      <div className="grid grid-cols-1 px-10 gap-4">
        {changePassworddata.map((field) => (
          <div className="" key={field.name}>
            <div className="relative z-0 w-full mb-3 group">
              <input
                onChange={handleChange}
                onFocus={() => handleFocus(field.name)}
                value={formData[field.name]}
                type={showPassword[field.name] ? "text" : "password"}
                name={field.name}
                id={field.name}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none ${
                  emptyFields.includes(field.name)
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } dark:focus:border-customYellow focus:outline-none focus:ring-0 text-gray-900 focus:border-blue-600 peer`}
                placeholder=""
                style={
                  emptyFields.includes(field.name) ? { borderColor: "red" } : {}
                }
              />
              <label
                htmlFor={field.name}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {field.label}
              </label>
              {"newPassword" === field.name && (
                <span
                  onClick={() => togglePasswordVisibility(field.name)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword[field.name] ? (
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  ) : (
                    <i class="fa fa-eye-slash" aria-hidden="true"></i>
                  )}
                </span>
              )}
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="px-10 pb-10">
        <button
          type="submit"
          className="mt-4 py-2 px-10 rounded-md bg-sky-700 text-slate-100 text-base w-full"
        >
          Change Password
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
