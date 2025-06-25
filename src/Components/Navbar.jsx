import logo from "../assets/logo-header.png";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="flex items-center justify-between py-2">
        {/* Logo and Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button className="lg:hidden text-2xl p-2" onClick={toggleMenu}>
            <AiOutlineMenu />
          </button>

          <a href="#" className="flex items-center">
            <img
              src={logo}
              className="w-16 sm:w-20 md:w-24 lg:w-28"
              alt="Logo"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6 items-center">
            <li>
              <a
                href="#"
                className="uppercase font-bold underline hover:text-[#92520B] transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase hover:text-[#92520B] transition-colors"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase hover:text-[#92520B] transition-colors"
              >
                Our Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase hover:text-[#92520B] transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase hover:text-[#92520B] transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Search and Shop Section - Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <input
              placeholder="Search Hemani's products"
              className="bg-transparent border border-black rounded-full placeholder:text-[#251E21] placeholder:uppercase px-4 py-2 pr-10 w-64 lg:w-96 text-sm"
            />
          </div>
          <button className="bg-[#251E21] text-white px-6 py-2 rounded-full uppercase font-thin hover:bg-[#3a2d30] transition-colors text-sm whitespace-nowrap">
            Shop Online
          </button>
        </div>

        {/* Mobile Search Icon and Shop Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button className="bg-[#251E21] text-white px-3 py-1.5 rounded-full uppercase text-xs">
            Shop
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#fff1dc] z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#251E21]/20">
          <img src={logo} className="w-20" alt="Logo" />
          <button onClick={toggleMenu} className="text-2xl p-2">
            <AiOutlineClose />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="p-4 border-b border-[#251E21]/20">
          <div className="relative">
            <input
              placeholder="Search products"
              className="bg-white border border-black rounded-full placeholder:text-[#251E21] px-4 py-2 pr-10 w-full text-sm"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col p-4 space-y-4">
          <li>
            <a
              href="#"
              className="block uppercase font-bold text-lg hover:text-[#92520B] transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block uppercase text-lg hover:text-[#92520B] transition-colors"
            >
              Categories
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block uppercase text-lg hover:text-[#92520B] transition-colors"
            >
              Our Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block uppercase text-lg hover:text-[#92520B] transition-colors"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block uppercase text-lg hover:text-[#92520B] transition-colors"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Shop Online Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button className="bg-[#251E21] text-white px-4 py-3 rounded-full uppercase font-thin w-full hover:bg-[#3a2d30] transition-colors">
            Shop Online
          </button>
        </div>
      </div>
    </>
  );
}
