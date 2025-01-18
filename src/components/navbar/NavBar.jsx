import { useState } from "react";
import InputField from "../inputfields/InputField";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/home" className="flex items-center space-x-3">
          <img src={logo} className="h-8 bg-cyan-600" alt="Logo" />
          <span className="text-xl font-semibold dark:text-white">
            LocaTracker
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex w-1/3">
          <InputField
            label=""
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search..."
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/home"
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </Link>
          <Link
            to="/adduser"
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            Add User
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="p-4 space-y-4">
            <InputField
              label=""
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search..."
            />
            <Link
              to="/home"
              className="block text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 "
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </Link>
            <Link
              to="/adduser"
              className="block text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
            >
              Add User
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
