"use client";

import { useState } from "react";

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

const Form: React.FC<FormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    issues: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}>
      <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Schedule Your Free Consultation</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-1.5 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-color4/50 focus:border-color4 transition-all duration-300"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block mb-1.5 text-gray-700 font-medium">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-color4/50 focus:border-color4 transition-all duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1.5 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-color4/50 focus:border-color4 transition-all duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="postcode" className="block mb-1.5 text-gray-700 font-medium">Postcode</label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-color4/50 focus:border-color4 transition-all duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="issues" className="block mb-1.5 text-gray-700 font-medium">Issue/s to be Addressed</label>
            <textarea
              id="issues"
              name="issues"
              value={formData.issues}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-color4/50 focus:border-color4 transition-all duration-300 resize-none"
              required
            />
          </div>

          <div className="flex justify-between pt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-color4 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-color5 transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

