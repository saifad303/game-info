import { AiFillHome } from "react-icons/ai";
import { GoFlame } from "react-icons/go";
import { MdLibraryBooks } from "react-icons/md";
import { CgMediaLive } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";

const ShortSidebar = () => {
  return (
    <div className="short-sidebar bg-gray-900 lg:w-24 md:w-24 sm:w-20 fixed h-full border-r border-gray-700 mt-pxl-24">
      <div className="">
        <a href="">
          <img
            src="/images/logo-circle.png"
            className=" w-pxl-32 mx-auto mb-pxl-28 mt-pxl-30"
            alt=""
          />
        </a>
        <a
          href=""
          className="flex items-center mb-pxl-28 justify-center lg:w-pxl-70 lg:h-pxl-70 md:w-pxl-70 md:h-pxl-70 sm:w-pxl-60 sm:h-pxl-60 text-white bg-gray-700 mx-auto  rounded-lg"
        >
          <AiFillHome size={24} className="" />
        </a>
        <a
          href=""
          className="flex text-gray-400 items-center mb-pxl-28 justify-center w-pxl-70  mx-auto h-pxl-70 rounded-lg"
        >
          <GoFlame size={24} className="" />
        </a>
        <a
          href=""
          className="flex text-gray-400 items-center mb-pxl-28 justify-center w-pxl-70  mx-auto h-pxl-70 rounded-lg"
        >
          <MdLibraryBooks size={24} className="" />
        </a>
        <a
          href=""
          className="flex text-gray-400 items-center mb-pxl-28 justify-center w-pxl-70  mx-auto h-pxl-70 rounded-lg"
        >
          <CgMediaLive size={24} className="" />
        </a>
        <a
          href=""
          className="flex text-gray-400 items-center mb-pxl-28 justify-center w-pxl-70  mx-auto h-pxl-70 rounded-lg"
        >
          <FaUserFriends size={24} className="" />
        </a>
      </div>
    </div>
  );
};

export default ShortSidebar;
