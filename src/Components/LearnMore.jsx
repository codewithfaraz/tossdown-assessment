import { AiOutlineArrowRight } from "react-icons/ai";
import LearnMoreImg1 from "../assets/learn-more-img-1.jpg";
import LearnMoreImg2 from "../assets/learn-more-img-2.jpg";

export default function LearnMore() {
  return (
    <div className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
      {/* Top Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 mb-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            Empowering Health with Nature's Richness
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 mb-4 leading-tight">
            Herbal Wellness, Crafted with Care
          </h1>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Hemani Group established since 1949, has vast experience in the
            field of herbal trade. This has been transferred in the production
            of herbal products to benefit the consumers in the most natural way.
          </p>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
            For over 70 years, Hemani has been at the forefront of the herbal
            industry, providing products designed to enhance your well-being.
            From herbal teas to essential oils, every product is formulated with
            a commitment to natural ingredients, ensuring your health is our
            priority.
          </p>
          <button className="border-2 border-[#251E21] px-6 py-2.5 rounded-full flex items-center justify-center gap-3 hover:bg-[#251E21] hover:text-white transition-all w-full sm:w-auto max-w-xs mx-auto lg:mx-0 group">
            <span className="text-sm font-medium">Learn More</span>
            <span className="flex items-center justify-center w-6 h-6 bg-[#92520B] rounded-full group-hover:bg-white transition-colors">
              <AiOutlineArrowRight className="text-white text-sm -rotate-45 group-hover:text-[#92520B]" />
            </span>
          </button>
        </div>
      </div>

      {/* Gradient Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Fresh Radiant Skin Card */}
        <div className="relative h-80 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden group cursor-pointer">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage: `url(${LearnMoreImg1})`,
            }}
          ></div>

          {/* Bottom Gradient Box */}
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/95 via-[#76C0DB]/90"></div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end text-white">
            <h2 className="uppercase text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Fresh, Radiant Skin
            </h2>
            <p className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed opacity-90">
              Crafted with high-quality herbal ingredients, our skinwash is
              designed to cleanse and refresh, leaving your skin feeling soft,
              rejuvenated, and glowing
            </p>
            <button className="inline-flex items-center text-white font-medium text-sm sm:text-base border-b-2 border-white pb-1 hover:border-opacity-70 transition-colors w-fit">
              EXPLORE PRODUCTS
            </button>
          </div>
        </div>

        {/* Long Lasting Fragrance Card */}
        <div className="relative h-80 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden group cursor-pointer">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage: `url(${LearnMoreImg2})`,
            }}
          ></div>

          {/* Bottom Gradient Box */}
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/95 via-[#30A8A9]/90"></div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end text-white">
            <h2 className="uppercase text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              LONG LASTING FRAGRANCE
            </h2>
            <p className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed opacity-90">
              Crafted with the finest essential oils and carefully selected
              ingredients, our perfumes offer a unique blend of richness,
              elegance, and long-lasting freshness
            </p>
            <button className="inline-flex items-center text-white font-medium text-sm sm:text-base border-b-2 border-white pb-1 hover:border-opacity-70 transition-colors w-fit">
              EXPLORE PRODUCTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
