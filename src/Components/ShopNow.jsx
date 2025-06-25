import { AiOutlineArrowRight } from "react-icons/ai";
import HoneyImg from "../assets/honey-img.png";
import ShopNowImg1 from "../assets/shop-now-img-1.png";
import ShopNowImg2 from "../assets/shop-now-img-2.png";

export default function ShopNow() {
  return (
    <div className="bg-[#fff1dc] py-4 sm:py-6 px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-12 flex flex-col items-center justify-center">
      <div className="space-x-12 flex flex-col lg:flex-row items-center gap-1 sm:gap-2 lg:gap-1">
        <img
          src={HoneyImg}
          alt="Honey"
          className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain"
        />
        <div className="w-full lg:w-3/5 text-center lg:text-left lg:pl-2 xl:pl-4">
          <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
            Nature's Liquid Gold
          </p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
            Pure, Natural Honey
          </h1>
          <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Discover the sweet goodness of nature with our 100% pure, raw honey.
            Packed with nutrients, antioxidants, and a rich history of health
            benefits, it's the perfect addition to your daily routine.
          </p>
          <button className="border-2 border-[#251E21] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#251E21] hover:text-white transition-all w-full sm:w-auto max-w-xs mx-auto lg:mx-0 group">
            <span className="text-xs sm:text-sm font-medium">Shop Now</span>
            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-[#92520B] rounded-full group-hover:bg-white transition-colors">
              <AiOutlineArrowRight className="text-white text-xs sm:text-sm -rotate-45 group-hover:text-[#92520B]" />
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center ">
        <div className="flex relative">
          <img
            src={ShopNowImg1}
            alt="Honey"
            className=" w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain"
          />
          <img
            src={ShopNowImg2}
            alt="Honey"
            className="absolute top-8 left-16 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain"
          />
        </div>

        <div className="w-full lg:w-3/5 text-center lg:text-left lg:pr-2 xl:pr-4">
          <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
            Packed With Wellness
          </p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
            Pure. Potent. Authentic
          </h1>
          <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Experience the full benefits of herbal powders made from the finest,
            unadulterated herbs, free from additives.
          </p>
          <button className="border-2 border-[#251E21] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#251E21] hover:text-white transition-all w-full sm:w-auto max-w-xs mx-auto lg:mx-0 group">
            <span className="text-xs sm:text-sm font-medium">Shop Now</span>
            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-[#92520B] rounded-full group-hover:bg-white transition-colors">
              <AiOutlineArrowRight className="text-white text-xs sm:text-sm -rotate-45 group-hover:text-[#92520B]" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
