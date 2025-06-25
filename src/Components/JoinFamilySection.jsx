import { AiOutlineArrowRight } from "react-icons/ai";
import JoinFamilyImg from "../assets/join-family-img-1.jpg";
import JoinFamilyImg2 from "../assets/join-family-img-2.jpg";
import JoinFamilyImg3 from "../assets/join-family-img-3.jpg";
import JoinFamilyImg4 from "../assets/join-family-img-4.jpg";
export default function JoinFamilySection() {
  return (
    <div className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-0">
        <div className="space-y-2 text-center lg:text-left">
          <p className="text-sm">Stay connected with us</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Join the Hemani Family
          </h1>
          <p className="text-sm">
            Get the latest updates on new products, wellness tips, exclusive
            offers, and more!
          </p>
        </div>
        <div>
          <button className="border-2 border-[#251E21] px-6 py-2.5 rounded-full flex items-center justify-center gap-3 hover:bg-[#251E21] hover:text-white transition-all w-full sm:w-auto max-w-xs mx-auto lg:mx-0 group">
            <span className="text-sm font-medium">Learn More</span>
            <span className="flex items-center justify-center w-6 h-6 bg-[#92520B] rounded-full group-hover:bg-white transition-colors">
              <AiOutlineArrowRight className="text-white text-sm -rotate-45 group-hover:text-[#92520B]" />
            </span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <img
          src={JoinFamilyImg}
          alt="Join Family"
          className="w-full rounded-xl"
        />
        <img
          src={JoinFamilyImg2}
          alt="Join Family"
          className="w-full rounded-xl"
        />
        <img
          src={JoinFamilyImg3}
          alt="Join Family"
          className="w-full rounded-xl"
        />
        <img
          src={JoinFamilyImg4}
          alt="Join Family"
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
}
