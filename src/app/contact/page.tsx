import React from "react";

import ContactForm from "../components/ContactForm";
// const formHandler = () => {
//   const form = document.getElementById("contactForm");

//   form?.addEventListener("submit", function (e) {
//     e.preventDefault();
//     //   const formData = new FormData(form);
//     console.log("hello");
//   });
// };

export default function Contact() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="text-xl">Get in touch with us for any inquiries.</p>
      <ContactForm />
      {/* <form id="contactForm" className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={formHandler}
        >
          Send Message
        </button>
      </form> */}
    </div>
  );
}
