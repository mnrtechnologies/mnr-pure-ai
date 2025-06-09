import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function CalendlyPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);

  const handleEvent = (e) => {
    if (e.data?.event === "calendly.event_scheduled") {
      console.log("✅ Event scheduled, redirecting in 5 seconds...");
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  };

  window.addEventListener("message", handleEvent);
  return () => {
    window.removeEventListener("message", handleEvent);
    document.body.removeChild(script);
  };
}, [navigate]);



  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
  <button
  onClick={() => navigate("/")}
  className="mb-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition flex items-center gap-2"
>
  <ArrowLeftIcon className="h-4 w-4" />
  Back to Home
</button>

      {loading && (
        <div className="flex justify-center items-center h-[90vh] w-full max-w-4xl">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-opacity-50"></div>
        </div>
      )}

      <iframe
        src="https://calendly.com/mnrtechnologies-info/30min?embed_domain=localhost&embed_type=Inline"
        className={`w-full max-w-4xl h-[90vh] border-none rounded-lg shadow-lg ${loading ? "hidden" : "block"}`}
        title="Calendly Booking"
        onLoad={() => setLoading(false)}
      ></iframe>
    </div>
  );
}
