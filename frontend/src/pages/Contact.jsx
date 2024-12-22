import axios from "axios";
import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import { toast } from "react-toastify";

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "Support@example.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+1 (555) 000-000",
    },
   
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [contacts, setContacts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/contact",
        formData
      );
      toast.success(response.data.message);
      
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form// Refresh contact list
    } catch (error) {
      toast.error(error);
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="py-4">
      <div className="text-center">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 ">
          <div className="max-w-lg space-y-3 flex items-center justify-center">
            <div>
              <p className="text-[orange] text-3xl font-semibold sm:text-4xl">
                Let us know how we can help
              </p>
              <p>
                We’re here to help and answer any question you might have, We
                look forward to hearing from you! Please fill out the form, or
                us the contact information bellow .
              </p>
              <div>
                <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                  {contactMethods.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-x-3">
                      <div className="flex-none text-gray-400">{item.icon}</div>
                      <p>{item.contact}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-1 lg:max-w-md">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 lg:mt-0 mt-10 hover:shadow-xl duration-200 shadow-[rgba(17,_17,_26,_0.1)_0px_4px_12px] p-6 rounded-md"
            >
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className="w-full px-3 py-1.5 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-md"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email address"
                  className="w-full px-3 py-1.5 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone No."
                  className="w-full px-3 py-1.5 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                  className="w-full h-28 px-3 py-1.5 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-black hover:bg-slate-800 rounded-full duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
