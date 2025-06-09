// BeamInspiredPage.jsx
import React, { useEffect, useRef } from "react"; // Import useEffect and useRef
import { Button } from "../ui/button";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import { ChevronRight, Zap, BarChart, Layers } from "lucide-react";
import { Navbar } from "./Navbar"; 


function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-slate-800/70 border border-blue-700/50 text-gray-100
      hover:border-blue-500/70 hover:shadow-lg hover:shadow-blue-600/30
      hover:-translate-y-1 transition-all transform duration-300 ease-in-out
      backdrop-blur-md">

      <CardHeader className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-xl
          bg-blue-600/20 border border-blue-500/50">
          {icon}
        </div>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-gray-400 text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}


function CTA({ onBookNow, bookNowRef }) {
  return (
    <section id="book-now-section" className="py-16 bg-slate-800/70 rounded-xl border border-blue-700/50 shadow-2xl backdrop-blur-md flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold">Ready to Dive In?</h2>
      <p className="text-gray-400 max-w-xl text-center px-4">
      <span className="text-slate-200">Connect with us today to get started and experience firsthand how we bring innovation to life."</span>
      </p>
      <Button
        size="lg"
        onClick={onBookNow}
        ref={bookNowRef} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
      >
        Book Now
      </Button>
    </section>
  );
}

export default function BeamInspiredPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const bookNowButtonRef = useRef(null); 

  useEffect(() => {
  
    if (location.state && location.state.scrollToId) {
      const targetId = location.state.scrollToId;
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
      
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });

      
        if (bookNowButtonRef.current) {
          bookNowButtonRef.current.classList.add("highlight-animation");
          setTimeout(() => {
            bookNowButtonRef.current.classList.remove("highlight-animation");
          }, 1500); 
        }
      }

  
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]); 

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-900/50 text-gray-100 overflow-hidden">
       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl opacity-30 pointer-events-none z-0" />
  <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-2xl opacity-20 pointer-events-none z-0" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-white/5 blur-[120px] opacity-10 pointer-events-none z-0" />
     
      <Navbar />
      <main className="flex-grow container mx-auto px-4">
        <section className="flex flex-col items-center text-center pt-24 pb-16 gap-8">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Build Amazing Things <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Faster Than Ever
            </span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-300">
            MNR Technologies unwavering commitment to excellence, delivers
            cutting edge software and AI solutions focused on innovation,
            performance, and elegant user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md transition-colors"
            >
              Start Building
              <ChevronRight className="h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 hover:border-blue-400 text-white px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Core Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-blue-400" />}
              title="Lightning Fast"
              description="Experience unparalleled speed and performance for your applications."
            />
            <FeatureCard
              icon={<BarChart className="h-8 w-8 text-blue-400" />}
              title="Insightful Analytics"
              description="Gain deep insights into your data with our powerful analytics tools."
            />
            <FeatureCard
              icon={<Layers className="h-8 w-8 text-blue-400" />}
              title="Scalable Infrastructure"
              description="Effortlessly scale your projects as your needs grow with our robust platform."
            />
          </div>
        </section>

        {/* Pass the ref to the CTA component */}
        <CTA onBookNow={() => navigate("/book")} bookNowRef={bookNowButtonRef} />

      </main>

      <footer className="border-t border-gray-700/50 py-8 text-center text-gray-500">
        © {new Date().getFullYear()} MNR‑PURE‑AI. All rights reserved.
      </footer>
    </div>
  );
}