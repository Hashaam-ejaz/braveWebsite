import React from "react";

export default function SimpleContactForm() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <h1 className="font-serif text-3xl mb-6">Get in touch</h1>

      <form className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-bold mb-2">
            Name *
          </label>
          <input
            id="firstName"
            type="text"
            required
            className="w-full py-2 px-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none text-base"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full py-2 px-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none text-base"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-bold mb-2">
            Company *
          </label>
          <input
            id="company"
            type="text"
            required
            className="w-full py-2 px-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none text-base"
          />
        </div>
      </form>
    </div>
  );
}
