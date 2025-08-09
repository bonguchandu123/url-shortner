import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

export default function ListPage() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${backendUrl}/api/list`);
      setUrls(res.data);
    } catch (error) {
      console.error("Error fetching URLs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this URL?")) return;

    try {
      setDeletingId(id);
      await axios.delete(`${backendUrl}/api/url/${id}`);
      setUrls((prev) => prev.filter((url) => url._id !== id));
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting URL");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-start items-center px-4 py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] to-[#12121a] z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-60 pointer-events-none z-0" />

      <div className="relative max-w-5xl w-full z-10">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 mb-8 text-center drop-shadow-lg tracking-wide">
          Shortened URLs List
        </h1>

        {loading ? (
          <p className="text-center text-gray-400 text-lg">Loading...</p>
        ) : urls.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No URLs found.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-700 bg-gray-900/90">
            <table className="min-w-full text-gray-300 text-left rounded-xl">
              <thead>
                <tr className="bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 text-white uppercase tracking-wider text-sm font-semibold select-none">
                  <th className="px-8 py-4 border-r border-gray-700">Original URL</th>
                  <th className="px-8 py-4 border-r border-gray-700">Short URL</th>
                  <th className="px-8 py-4 text-center">Visits</th>
                  <th className="px-8 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {urls.map((url, idx) => (
                  <tr
                    key={url._id}
                    className={`transition-all cursor-pointer border-b border-gray-700
                      ${idx % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/60"}
                      hover:bg-gradient-to-r hover:from-blue-700 hover:via-purple-700 hover:to-pink-700
                      hover:text-white hover:shadow-lg hover:border-l-4 hover:border-pink-500`}
                  >
                    <td className="px-8 py-4 break-words font-medium">{url.originalUrl}</td>
                    <td className="px-8 py-4 break-words">
                      <a
                        href={url.shortUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:text-pink-400 hover:underline font-semibold transition"
                      >
                        {url.shortUrl}
                      </a>
                    </td>
                    <td className="px-8 py-4 text-center font-semibold">{url.visits}</td>
                    <td className="px-8 py-4 text-center">
                      <button
                        onClick={() => handleDelete(url._id)}
                        disabled={deletingId === url._id}
                        className="inline-flex items-center gap-1 px-3 py-1 text-red-400 hover:text-red-600 hover:bg-red-900 rounded transition disabled:opacity-50"
                        title="Delete URL"
                      >
                        <Trash2 className="w-5 h-5" />
                        {deletingId === url._id ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
