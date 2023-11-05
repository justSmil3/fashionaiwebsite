import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-[46px] bg-gradient-to-r from-blue-400 from-10% to-blue-500 to-90% p-2 px-4">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-baseline">
      <div className="flex flex-row text-white text-2xl font-bold">
          ai fashion.
        </div>
        <div className="flex flex-row text-gray-100 text-sm pl-4">
          design made simple
        </div></div>
        {/* Responsive Burger Menu with Dropdown */}
        <div className="sm:hidden relative">
          <button
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 space-y-2 bg-white text-gray-800 p-2 rounded-md shadow-lg">
                <ul>
                    <li>
                <a href="/about">About</a>
                    </li>
                    <li>
              <a href="/about">About</a>
                    </li>
                    <li>
              <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="sm:flex space-x-4 hidden md:block">
          <a href="/" className="text-white hover:underline">
            Home
          </a>
          <a href="/about" className="text-white hover:underline">
            About
          </a>
          <a href="/contact" className="text-white hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
