import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

export default function ExploreSection() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-[80vh] px-4">
      
   
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] to-[#12121a] z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl z-0" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
          Shorten Links, Share Anywhere
        </h1>
        <p className="mt-6 text-lg text-gray-400">
          Transform long, messy URLs into short, clean links in seconds.  
          Click below to start shortening your first link now.
        </p>

        <a href="/shorten" className="inline-block">
          <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg">
            Get Started
            <ArrowRightCircle className="w-5 h-5" />
          </button>
        </a>
      </motion.div>
    </section>
  );
}
