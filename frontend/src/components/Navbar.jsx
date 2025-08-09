import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkIcon, Scissors, List, Menu, X, Home } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-gray-950/90 backdrop-blur-xl backdrop-saturate-150">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative z-10">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
              <LinkIcon className="w-6 h-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="relative">
              <span className="block text-lg font-semibold bg-gradient-to-r from-red-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                URL Shortener
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:!flex items-center gap-6 z-10">
            <NavLink to="/" label="Home" icon={<Home className="w-4 h-4" />} />
            <NavLink to="/shorten" label="Shorten" icon={<Scissors className="w-4 h-4" />} />
            <NavLink to="/list" label="List" icon={<List className="w-4 h-4" />} />
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden z-20">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-white/5">
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div ref={menuRef} className="sm:hidden mt-2 flex flex-col gap-2 pb-4 z-10 relative w-full">
            <NavLink full to="/" label="Home" icon={<Home className="w-4 h-4" />} closeMenu={() => setIsOpen(false)} />
            <NavLink full to="/shorten" label="Shorten" icon={<Scissors className="w-4 h-4" />} closeMenu={() => setIsOpen(false)} />
            <NavLink full to="/list" label="List" icon={<List className="w-4 h-4" />} closeMenu={() => setIsOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, label, icon, full = false, closeMenu }) {
  return (
    <Link
      to={to}
      onClick={() => closeMenu?.()}
      className={`relative group flex items-center gap-2 px-4 py-3 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
        border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden 
        ${full ? "w-full justify-start" : "w-fit"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10">{icon}</span>
      <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
        {label}
      </span>
    </Link>
  );
}
