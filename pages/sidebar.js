import { AiFillHome } from "react-icons/ai";
import { GoFlame } from "react-icons/go";
import { MdLibraryBooks } from "react-icons/md";
import { CgMediaLive } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar border-r border-gray-700 flex-col mt-pxl-24 pt-pxl-36 bg-gray-900 fixed h-full">
        <div className="">
          <a href="">
            <img
              src="/images/logo.png"
              className="xl:w-40 mx-auto mb-pxl-56"
              alt=""
            />
          </a>
          <a
            href=""
            className=" mb-pxl-16 flex group items-center hover:bg-gray-500 xl:w-56 mx-auto rounded-lg xl:py-pxl-12 xl:pl-pxl-37"
          >
            <AiFillHome
              size={24}
              className=" text-gray-400 mr-pxl-12 group-hover:text-white"
            />
            <span className="xl:text-fs-14px text-gray-400 font-normal group-hover:text-white group-hover:font-semibold">
              Home
            </span>
          </a>
          <a
            href=""
            className="mb-pxl-16 flex group items-center hover:bg-gray-500 xl:w-56 mx-auto rounded-lg xl:py-pxl-12 xl:pl-pxl-37"
          >
            <GoFlame
              size={24}
              className=" text-gray-400 mr-pxl-12 group-hover:text-white"
            />
            <span className="xl:text-fs-14px text-gray-400 font-normal group-hover:text-white group-hover:font-semibold">
              Store
            </span>
          </a>
          <a
            href=""
            className="mb-pxl-16 flex group items-center hover:bg-gray-500 xl:w-56 mx-auto rounded-lg xl:py-pxl-12 xl:pl-pxl-37"
          >
            <MdLibraryBooks
              size={24}
              className=" text-gray-400 mr-pxl-12 group-hover:text-white"
            />
            <span className="xl:text-fs-14px text-gray-400 font-normal group-hover:text-white group-hover:font-semibold">
              Library
            </span>
          </a>
          <a
            href=""
            className="mb-pxl-16 flex group items-center hover:bg-gray-500 xl:w-56 mx-auto rounded-lg xl:py-pxl-12 xl:pl-pxl-37"
          >
            <FaUserFriends
              size={24}
              className=" text-gray-400 mr-pxl-12 group-hover:text-white"
            />
            <span className="xl:text-fs-14px text-gray-400 font-normal group-hover:text-white group-hover:font-semibold">
              Friends
            </span>
          </a>
          <a
            href=""
            className="mb-pxl-16 flex group items-center hover:bg-gray-500 xl:w-56 mx-auto rounded-lg xl:py-pxl-12 xl:pl-pxl-37"
          >
            <CgMediaLive
              size={24}
              className=" text-gray-400 mr-pxl-12 group-hover:text-white"
            />
            <span className="xl:text-fs-14px text-gray-400 font-normal group-hover:text-white group-hover:font-semibold">
              Live
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
