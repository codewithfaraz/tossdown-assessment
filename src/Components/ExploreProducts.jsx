import { AiOutlineArrowRight } from "react-icons/ai";
import ExploreProductsImg from "../assets/explore-products-img-1.png";
import ExploreProductsImg2 from "../assets/explore-products-img-2.png";

export default function ExploreProducts() {
  return (
    <div className="my-6 py-4 px-4 sm:px-6  mx-auto">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
        <div className="flex-1 max-w-none lg:max-w-4xl">
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            Discover Herbal Essentials
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4">
            From Skincare to Wellness
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl">
            Explore our carefully curated categories, designed to rejuvenate
            your skin, boost your health, and bring you natural healing. Whether
            it's nourishing oils or rejuvenating face care, find the perfect
            product to enhance your daily routine.
          </p>
        </div>

        {/* Explore Button */}
        <div className="w-full lg:w-auto">
          <button className="border-2 border-black px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center justify-center gap-3 sm:gap-4 hover:bg-black hover:text-white transition-all w-full lg:w-auto max-w-xs mx-auto lg:mx-0 group">
            <span className="text-sm sm:text-base font-medium">
              Explore Products
            </span>
            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-[#92520B] rounded-full group-hover:bg-white transition-colors">
              <AiOutlineArrowRight className="text-white text-sm sm:text-xl -rotate-45 group-hover:text-[#92520B]" />
            </span>
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-8 sm:mt-10 lg:mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {/* Product Card 1 */}
          <div className="relative rounded-[50px] sm:rounded-[60px] lg:rounded-[80px] xl:rounded-[100px] overflow-hidden aspect-[3/4] group hover:scale-105 transition-transform duration-300">
            <img
              src={ExploreProductsImg}
              className="w-full h-full object-cover"
              alt="Product category"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm lg:text-base font-medium z-10 text-center">
              Hair Care
            </div>
          </div>

          <div className="relative rounded-[50px] sm:rounded-[60px] lg:rounded-[80px] xl:rounded-[100px] overflow-hidden aspect-[3/4] group hover:scale-105 transition-transform duration-300">
            <img
              src={ExploreProductsImg}
              className="w-full h-full object-cover"
              alt="Product category"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm lg:text-base font-medium z-10 text-center">
              Skin Care
            </div>
          </div>

          <div className="relative rounded-[50px] sm:rounded-[60px] lg:rounded-[80px] xl:rounded-[100px] overflow-hidden aspect-[3/4] group hover:scale-105 transition-transform duration-300">
            <img
              src={ExploreProductsImg2}
              className="w-full h-full object-cover"
              alt="Product category"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/80 via-emerald-300/40 to-transparent" />
            <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm lg:text-base font-medium z-10 text-center">
              Wellness
            </div>
          </div>

          <div className="relative rounded-[50px] sm:rounded-[60px] lg:rounded-[80px] xl:rounded-[100px] overflow-hidden aspect-[3/4] group hover:scale-105 transition-transform duration-300">
            <img
              src={ExploreProductsImg}
              className="w-full h-full object-cover"
              alt="Product category"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm lg:text-base font-medium z-10 text-center">
              Oils
            </div>
          </div>

          <div className="relative rounded-[50px] sm:rounded-[60px] lg:rounded-[80px] xl:rounded-[100px] overflow-hidden aspect-[3/4] group hover:scale-105 transition-transform duration-300 col-span-2 sm:col-span-1">
            <img
              src={ExploreProductsImg}
              className="w-full h-full object-cover"
              alt="Product category"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm lg:text-base font-medium z-10 text-center">
              Bundles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
