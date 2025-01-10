import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  const closeMenu = () => {
    setShowDropdown(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 via-black to-black text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            Syeda Sidra
          </Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-full left-0 w-full md:w-auto bg-gradient-to-r md:bg-transparent`}
        >
          <Link
            to="/home"
            className="block text-lg py-2 px-4 md:inline-block hover:text-blue-400 transition duration-300"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-lg py-2 px-4 md:inline-block hover:text-blue-400 transition duration-300"
            onClick={closeMenu}
          >
            About
          </Link>
          {/* Dropdown for Achievements */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
          >
            <button className="block text-lg py-2 px-4 md:inline-block hover:text-blue-400 transition duration-300">
              Achievements
            </button>
            {showDropdown && (
              <div className="absolute bg-white text-black rounded shadow-md mt-2 p-2">
                <HashLink
                  to="/achievements#national"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={closeMenu}
                >
                  National
                </HashLink>
                <HashLink
                  to="/achievements#international"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={closeMenu}
                >
                  International
                </HashLink>
              </div>
            )}
          </div>
         
          <Link
            to="/contact"
            className="block text-lg py-2 px-4 md:inline-block hover:text-blue-400 transition duration-300"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
