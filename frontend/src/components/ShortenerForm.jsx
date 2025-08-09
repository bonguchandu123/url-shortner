import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, CheckCircle2, ExternalLink } from "lucide-react";
import axios from "axios";

export default function ShortenerForm() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!longUrl) return;

    try {
      setLoading(true);
      setCopied(false);

      const res = await axios.post(`${backendUrl}/api/shorten`, {
        originalUrl: longUrl,
      });

      if (res.data.shortUrl) {
        setShortUrl(res.data.shortUrl);
      } else {
        console.error("No shortUrl returned from backend");
      }
    } catch (error) {
      console.error("Error shortening URL:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-xl mx-auto p-4 sm:p-8 rounded-3xl bg-gray-900/80 border border-gray-700 shadow-lg overflow-hidden"
    >
      {/* Gradient Glow Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-700 to-pink-600 opacity-60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 rounded-3xl bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 opacity-90"
      />

      <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4 sm:gap-6">
        <label className="text-white text-xl font-semibold tracking-wide">
          Enter your long URL:
        </label>
        <input
          type="url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="https://example.com/very/long/link"
          required
          className="w-full rounded-xl border border-transparent bg-gray-800 px-5 py-4 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 py-4 text-white font-semibold shadow-lg hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>

      {shortUrl && (
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="relative z-10 mt-8 flex flex-wrap sm:flex-nowrap flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-pink-400 bg-gray-800 px-4 py-4 shadow-lg"
>
  <ExternalLink className="h-6 w-6 text-pink-400 flex-shrink-0" />

  <a
    href={shortUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-grow min-w-0 break-words text-pink-400 font-medium hover:underline"
  >
    {shortUrl}
  </a>

  <button
    onClick={handleCopy}
    aria-label="Copy short URL"
    className="rounded-full p-2 text-gray-300 hover:bg-pink-600 hover:text-white transition flex-shrink-0"
  >
    {copied ? <CheckCircle2 className="h-6 w-6" /> : <Copy className="h-6 w-6" />}
  </button>
</motion.div>

      )}
    </motion.div>
  );
}
