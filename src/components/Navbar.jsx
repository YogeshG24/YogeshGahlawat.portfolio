import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#hero"
          className="group flex items-center gap-3 font-mono text-sm tracking-wider text-white transition-opacity hover:opacity-90"
        >
          {/* Animated Initials Badge */}
          <span className="relative flex items-center justify-center w-9 h-9 border border-white text-xs font-bold tracking-widest uppercase transition-all duration-300 group-hover:bg-white group-hover:text-black">
            <span className="transition-transform duration-300 group-hover:scale-110">
              YG
            </span>
          </span>

          {/* Full Name */}
          <span className="font-medium tracking-widest uppercase text-xs text-neutral-300 group-hover:text-white transition-colors">
            Yogesh Gahlawat
          </span>
        </a>

        <div className="hidden md:flex space-x-8 text-sm tracking-wider text-neutral-400">
          <a href="#about" className="hover:text-white transition">
            ABOUT
          </a>
          <a href="#skills" className="hover:text-white transition">
            SKILLS
          </a>
          <a href="#experience" className="hover:text-white transition">
            EXPERIENCE
          </a>
          <a href="#education" className="hover:text-white transition">
            EDUCATION
          </a>
          <a href="#contact" className="hover:text-white transition">
            CONTACT
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-b border-neutral-800 px-6 py-4 space-y-3">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-400 hover:text-white"
          >
            ABOUT
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-400 hover:text-white"
          >
            SKILLS
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-400 hover:text-white"
          >
            EXPERIENCE
          </a>
          <a
            href="#education"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-400 hover:text-white"
          >
            EDUCATION
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-400 hover:text-white"
          >
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
}
