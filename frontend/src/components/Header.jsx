import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="relative min-h-[40vh] flex flex-col justify-center items-center px-4 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] to-[#12121a] z-0" />

     
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl z-0" />


      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-60 pointer-events-none z-0" />

   
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center mb-16 max-w-4xl"
      >
        <div className="inline-block relative">
       
          <div className="absolute -inset-2 blur-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-2xl" />

     
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Smart URL Shortener
          </h1>
        </div>

     
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Shorten your links in seconds and share them anywhere. Fast, secure, and simple.
        </motion.p>
      </motion.div>
    </section>
  );
}
