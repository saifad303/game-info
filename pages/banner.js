import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex">
      <div className="big-banner relative">
        <Image
          src="/images/banner-1.png"
          alt="Picture of the author"
          width={908}
          height={448}
        />
        <span className="absolute left-pxl-28 top-pxl-18 text-white font-bold text-fs-26px">
          Fortnite
        </span>
        <div className="game-info h-52 w-11/12 absolute top-60 pl-pxl-28 flex-col">
          <span className="text-white font-semibold text-fs-14px block mb-pxl-4">
            Update
          </span>
          <div className=" leading-6 mb-pxl-28">
            <span className="text-white font-bold text-fs-24px block">
              The hunt is in fortnite chapter 2-
            </span>
            <span className="text-white font-bold text-fs-24px block">
              Season five zero point
            </span>
          </div>
          <button className=" rounded-lg bg-blue-500 flex items-center justify-center space-x-1 w-pxl-156 h-pxl-56">
            <span className=" text-fs-16px font-normal text-white ">
              Play for free
            </span>
            <FaArrowRight className=" text-white" size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
