import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        <Link to="/">
          <img
            src="/logo.png"
            alt="AR INFOTEK"
            className="h-10 md:h-11"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-slate-50 p-1 rounded-full border border-slate-100">

          <a
            href="#"
            className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-[#1e5aa8] hover:shadow-md transition-all"
          >
            Home
          </a>

          <a
            href="#courses"
            className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-[#1e5aa8] hover:shadow-md transition-all"
          >
            Courses
          </a>

          <a
            href="#why"
            className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-[#1e5aa8] hover:shadow-md transition-all"
          >
            Why Us
          </a>

          <a
            href="#projects"
            className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-[#1e5aa8] hover:shadow-md transition-all"
          >
            Innovation Labs
          </a>

          <a
            href="#internship"
            className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-[#1e5aa8] hover:shadow-md transition-all"
          >
            Internship
          </a>

          <Link
            to="/admin"
            className="px-4 py-1.5 text-xs lg:text-sm font-bold text-slate-600 rounded-full hover:bg-white hover:text-[#1e5aa8] hover:shadow-md transition-all"
          >
            Admin
          </Link>

        </nav>

        <div className="flex items-center gap-3">

          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-lg font-bold border-2 border-[#1e5aa8] text-[#1e5aa8] hover:bg-blue-50 transition text-xs lg:text-sm"
          >
            Talk to Us
          </a>

          <a
            href="#courses"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-lg font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md hover:-translate-y-0.5 transition text-xs lg:text-sm"
          >
            View Courses
          </a>

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="md:hidden p-1.5 rounded-lg border"
          >
            ☰
          </button>

        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col p-4 space-y-2">

            <a href="#">Home</a>
            <a href="#courses">Courses</a>
            <a href="#why">Why Us</a>
            <a href="#projects">
              Innovation Labs
            </a>
            <a href="#internship">
              Internship
            </a>

            <Link to="/admin">
              Admin
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}