"use client";
import { FormEvent, useState } from "react";

export default function ComingSoon() {
  const [showForm, setShowForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleGetEarlyAccess = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: phoneNumber }),
      });
      const content = await response.json();
      console.log(content);
      if (content.data) {
        console.log(content.data.tableRange);
      }
      setPhoneNumber("");
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting phone number:", error);
    }
  };

  const isPhoneNumberValid = phoneNumber.length > 9;

  return (
    <div className="bg-[#000f1d] min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-500 mb-4">chawabet</h1>
        <h2 className="text-2xl font-semibold text-white mb-2">COMING SOON</h2>
        <p className="text-gray-400">
          We are preparing something amazing and exciting. We also have a
          special surprise for our early access customers.
        </p>
      </div>
      {!showForm && !submitted && (
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full mt-8"
          onClick={handleGetEarlyAccess}
        >
          GET EARLY ACCESS HERE
        </button>
      )}
      {showForm && !submitted && (
        <form className="flex flex-col space-y-4 mb-8" onSubmit={handleSubmit}>
          <div className="flex items-center space-x-4 mb-8 ">
            <input
              type="text"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number for offers"
              className="input py-3 px-6 rounded-full text-center"
            />
            <button
              type="submit"
              className={`py-3 px-6 rounded-full ${
                isPhoneNumberValid
                  ? "bg-green-500 hover:bg-green-600 text-white font-semibold"
                  : "bg-gray-400 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!isPhoneNumberValid}
            >
              Submit
            </button>
          </div>
        </form>
      )}
      {submitted && (
        <p className="text-gray-400 mb-8">
          Thank you for Submitting your phone number!
        </p>
      )}
    </div>
  );
}
