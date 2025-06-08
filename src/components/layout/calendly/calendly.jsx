import React from "react";

export default function CalendlyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <iframe
        src="https://calendly.com/mnrtechnologies-info/30min"
        className="w-full max-w-4xl h-[90vh] border-none rounded-lg shadow-lg"
        title="Calendly Booking"
      ></iframe>
    </div>
  );
}