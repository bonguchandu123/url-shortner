import ShortenerForm from "../components/ShortenerForm";
import { motion } from "framer-motion";

export default function ShortenPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-10 overflow-hidden">

   
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] to-[#12121a] z-0" />
      

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl z-0" />

      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-60 pointer-events-none z-0" />

      <div className="relative max-w-2xl w-full text-center z-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 mb-8 drop-shadow-lg">
          Shorten Your URL
        </h1>
        <ShortenerForm />
      </div>
    </div>
  );
}
