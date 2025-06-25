import review from "../assets/review.jpg";
import HeaderBottle1 from "../assets/header-bottle-1.png";
import HeaderBottle2 from "../assets/header-bottle-2.png";

import { AiFillStar } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-[#fff1dc] py-2 px-4 sm:px-6 lg:px-8 h-screen lg:h-[90vh] overflow-hidden">
      <Navbar />

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between py-4 sm:py-6 lg:py-8 gap-6 lg:gap-4 h-full">
        {/* Mobile: Show bottles first, Desktop: Show content first */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 px-2 sm:px-4 lg:px-0">
          {/* Review Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6">
            {/* Review Images */}
            <div className="flex -space-x-2">
              <img
                src={review}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                alt="Review 1"
              />
              <img
                src={review}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                alt="Review 2"
              />
              <img
                src={review}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                alt="Review 3"
              />
            </div>

            {/* Rating */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar
                    key={i}
                    className="text-yellow-500 text-sm sm:text-base"
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mt-1">
                18,921 (Reviews)
              </p>
            </div>
          </div>

          {/* Description Text */}
          <p className="text-xs sm:text-sm text-center lg:text-left max-w-md mx-auto lg:mx-0 mt-4 sm:mt-6 text-gray-700 leading-relaxed">
            Founded in 1949, Hemani Group brings decades of expertise in herbal
            trade, crafting natural products that enrich the lives of consumers
            with the power of nature.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <button className="bg-[#251E21] text-white px-6 py-2.5 rounded-full uppercase font-medium text-sm hover:bg-[#3a2d30] transition-colors w-full sm:w-auto max-w-xs">
              Order Online
            </button>
            <button className="border-2 border-[#251E21] px-6 py-2.5 rounded-full flex items-center justify-center gap-3 hover:bg-[#251E21] hover:text-white transition-all w-full sm:w-auto max-w-xs group">
              <span className="text-sm font-medium">Explore Products</span>
              <span className="flex items-center justify-center w-6 h-6 bg-[#92520B] rounded-full group-hover:bg-white transition-colors">
                <AiOutlineArrowRight className="text-white text-sm -rotate-45 group-hover:text-[#92520B]" />
              </span>
            </button>
          </div>

          {/* Main Heading - Left Side */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
              <span className="block">SOFT &</span>
              <span className="block mt-2">SMOOTH HAIR</span>
            </h1>
          </div>
        </div>

        {/* Right Side - Bottles and "STRONG" */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col justify-between items-center lg:items-end relative h-full py-4">
          {/* "STRONG" Heading - Positioned at top right */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center lg:text-right self-center lg:self-end relative z-10">
            STRONG
          </h1>

          {/* Bottles Container - Stacked Vertically */}
          <div className="flex flex-col relative">
            <img src={HeaderBottle2} className="w-[420px] h-auto mr-12" />
            <img
              src={HeaderBottle1}
              className="w-[920px]  absolute left-16 -top-4 z-10 lg:-top-16"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
