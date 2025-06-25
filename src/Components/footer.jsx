import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import logo from "../assets/logo-header.png";

export default function Footer() {
  return (
    <div className="bg-[#fff1dc] px-4 sm:px-6 lg:px-10 py-8 lg:py-10">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center mb-8 lg:mb-12">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold py-6 lg:py-10 uppercase leading-tight max-w-4xl">
          Join the Hemani Wellness Journey – Embrace nature's power, nourish
          your body, and achieve your healthiest self with our community.
        </h1>
        <button className="border-2 border-[#251E21] px-6 py-2.5 rounded-full flex items-center justify-center gap-3 hover:bg-[#251E21] hover:text-white transition-all w-full sm:w-auto max-w-xs group">
          <span className="text-sm font-medium">Shop Now</span>
          <span className="flex items-center justify-center w-6 h-6 bg-[#92520B] rounded-full group-hover:bg-white transition-colors">
            <AiOutlineArrowRight className="text-white text-sm -rotate-45 group-hover:text-[#92520B]" />
          </span>
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 my-8">
        {/* Logo & Contact */}
        <div className="space-y-3 text-center sm:text-left">
          <a href="#" className="flex justify-center sm:justify-start">
            <img src={logo} className="w-20 sm:w-24 lg:w-28" alt="Logo" />
          </a>
          <div className="text-sm space-y-1">
            <p>HEMANI Canada - Columbus Rd And Derry Rd</p>
            <p>905-795-9669</p>
            <p>6880, Columbus Rd And Derry Rd, Mississauga</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 text-center sm:text-left">
          <h3 className="font-bold uppercase text-sm">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#" className="hover:text-[#92520B] transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-[#92520B] transition-colors">
              Categories
            </a>
            <a href="#" className="hover:text-[#92520B] transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-[#92520B] transition-colors">
              Contact Us
            </a>
            <a href="#" className="hover:text-[#92520B] transition-colors">
              Our Products
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="space-y-3 text-center sm:text-left">
          <h3 className="font-bold uppercase text-sm">Useful Links</h3>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#" className="hover:text-[#92520B] transition-colors">
              Shop Now
            </a>
            <a href="#" className="hover:text-[#92520B] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#92520B] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-3 text-center sm:text-left">
          <h3 className="font-bold uppercase text-sm">Follow Us</h3>
          <div className="flex justify-center sm:justify-start space-x-3">
            <a
              href="#"
              className="bg-black/20 rounded-full p-2 hover:bg-black/30 transition-colors"
            >
              <AiFillFacebook className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-black/20 rounded-full p-2 hover:bg-black/30 transition-colors"
            >
              <AiFillTwitterCircle className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-black/20 rounded-full p-2 hover:bg-black/30 transition-colors"
            >
              <AiOutlineInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-6 text-xs sm:text-sm">
        <p className="uppercase text-center sm:text-left">
          &copy; Copyright All Rights Reserved 2025 © HEMANICANADA
        </p>
        <p className="uppercase text-center sm:text-right">
          Powered by tossdown
        </p>
      </div>
    </div>
  );
}
