import React from "react";

export default function SimpleContactForm({
  setShowSheet,
}: {
  setShowSheet: (showSheet: boolean) => void;
}) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page refresh
    console.log("Form submitted!");
    setShowSheet(false);
    // Add your form handling logic here
  };

  return (
    <div className="max-w-[80rem] mx-auto p-6 bg-white dark:bg-neutral-950 dark:text-neutral-200">
      <h1 className="font-serif text-3xl mb-6">Get in touch</h1>

      <form
        className="grid grid-cols-1 gap-6 lg:grid-cols-2 w-full"
        onSubmit={handleSubmit}
      >
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-bold mb-2 dark:text-neutral-300"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            required
            className="w-full py-2 px-0 border-b border-gray-300 dark:border-neutral-700 focus:border-blue-500 focus:outline-none text-base dark:bg-neutral-900 dark:text-neutral-200"
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-bold mb-2 dark:text-neutral-300"
          >
            Company
          </label>
          <input
            id="company"
            type="text"
            className="w-full py-2 px-0 border-b border-gray-300 dark:border-neutral-700 focus:border-blue-500 focus:outline-none text-base dark:bg-neutral-900 dark:text-neutral-200"
          />
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold mb-2 dark:text-neutral-300"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full py-2 px-0 border-b border-gray-300 dark:border-neutral-700 focus:border-blue-500 focus:outline-none text-base dark:bg-neutral-900 dark:text-neutral-200"
          />
        </div>

        {/* Company Address */}
        <div>
          <label
            htmlFor="companyAddress"
            className="block text-sm font-bold mb-2 dark:text-neutral-300"
          >
            Company Address
          </label>
          <input
            id="companyAddress"
            type="text"
            className="w-full py-2 px-0 border-b border-gray-300 dark:border-neutral-700 focus:border-blue-500 focus:outline-none text-base dark:bg-neutral-900 dark:text-neutral-200"
          />
        </div>

        {/* Message */}
        <div className="lg:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-bold mb-2 dark:text-neutral-300"
          >
            Message *
          </label>
          <textarea
            id="message"
            required
            className="w-full py-2 px-0 border-b border-gray-300 dark:border-neutral-700 focus:border-blue-500 focus:outline-none text-base dark:bg-neutral-900 dark:text-neutral-200"
          />
        </div>

        {/* Terms of Use Checkbox */}
        <div className="flex items-center lg:col-span-2">
          <input
            id="terms"
            type="checkbox"
            required
            className="h-4 w-4 border-gray-300 dark:border-neutral-700 focus:border-blue-500 focus:ring-0 dark:bg-neutral-900 dark:checked:bg-blue-500"
          />
          <label htmlFor="terms" className="ml-2 text-sm dark:text-neutral-300">
            I agree to the{" "}
            <a className="text-blue-500 hover:underline dark:text-blue-400">
              Terms of Use
            </a>
          </label>
        </div>

        {/* Submit Button */}
        <div className="lg:col-span-2">
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-gray-800 transition-colors dark:bg-neutral-800 dark:hover:bg-neutral-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
