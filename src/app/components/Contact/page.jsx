"use client";
import React, { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to API
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
      comments: "",
    });
  };

  return (
    <div
      className="bg-blue-700 flex items-center justify-around flex-col md:flex-row h-screen md:h-auto lg:h-auto w-full"
      id="Contact"
    >
      <div className="bg-blue-700 md:p-8  w-full md:w-1/2 ">
        <div className="-500 text-center text-white py-4 font-bold text-3xl mb-6">
          <h1>Know More About Travel Air International</h1>
        </div>

        <div className="rounded-lg shadow-xl md:p-6 md:border-[1px] bg-white h-auto lg:h-[60%] w-[90%] lg:w-auto pt-2 pb-2 ml-5 lg:ml-0 lg:items-center lg:justify-center" >
          <form onSubmit={handleSubmit} className="space-y-4 mx-6 ">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 w-full border rounded-md outline-none"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
             
                <input
                 placeholder="Last Name"
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 w-full border rounded-md outline-none"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
            
              <input
               placeholder="Phone Number"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 p-2 w-full border rounded-md outline-none"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
            
              <input
              placeholder=' Email Address'
                type="email"
                id="emailAddress"
                name="emailAddress"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div>
           
              <textarea
              placeholder='Comments'
                id="comments"
                name="comments"
                className="mt-1 p-2 w-full border rounded-md outline-none"
                rows="4"
                value={formData.comments}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 duration-1000 hover:bg-transparent hover:text-black text-white font-bold py-2 px-4 rounded"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default page;
