import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { ChevronRight, Zap, BarChart, Layers } from "lucide-react";
import { Navbar } from "./Navbar";


export default function BeamInspiredPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center">
      <Navbar/>

      <main className="container mx-auto mt-20 sm:mt-24 px-4 text-center flex-grow">
        <section
          className="py-20 relative isolate"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900/90 backdrop-blur-sm z-[-1]"></div>

          <div className="relative z-10">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Build Amazing Things <br />
              <span className="text-blue-400">Faster Than Ever</span>
            </h1>
            <p
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              MNR Technologies unwavering commitment to excellence in delivering
              cutting-edge software and AI solutions. Our focus on innovation,
              performance, and elegant user experiences tailored for the future
              of technology.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 w-full sm:w-auto transform hover:scale-105 transition-transform duration-200"
              >
                Start Building <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white hover:border-blue-400 px-8 py-3 w-full sm:w-auto transform hover:scale-105 transition-transform duration-200"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section (Simplified) */}
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Core Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card className="bg-gray-800/70 border-gray-700 text-gray-100 transition-all duration-300 hover:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 group backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-xl mb-6 border border-blue-500/50 group-hover:bg-blue-600/30 transition-colors duration-300">
                  <Zap className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Experience unparalleled speed and performance for your
                  applications.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card className="bg-gray-800/70 border-gray-700 text-gray-100 transition-all duration-300 hover:border-blue-500/70 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 group backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-xl mb-6 border border-blue-500/50 group-hover:bg-blue-600/30 transition-colors duration-300">
                  <BarChart className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl">Insightful Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Gain deep insights into your data with our powerful analytics
                  tools.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card className="bg-gray-800/70 border-gray-700 text-gray-100 transition-all duration-300 hover:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 group backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-xl mb-6 border border-blue-500/50 group-hover:bg-blue-600/30 transition-colors duration-300">
                  <Layers className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl">
                  Scalable Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Effortlessly scale your projects as your needs grow with our
                  robust platform.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action (Simplified) */}
        <section className="py-16 sm:py-20 my-10 bg-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Dive In?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto px-4">
            Join thousands of developers building the future. Get started today
            and experience the difference.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 transform hover:scale-105 transition-transform duration-200"
          >
            Sign Up Now
          </Button>
        </section>
      </main>

      <footer className="w-full p-8 border-t border-gray-700/50 mt-16">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MNR-PURE-AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
