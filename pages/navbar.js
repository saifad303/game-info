import { FaBell } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center pt-pxl-60">
        <div className="flex items-center w-6/12">
          <a
            href=""
            className=" font-semibold text-fs-14px text-gray-600 hover:text-white hover:bg-blue-500 w-pxl-78 h-pxl-32 flex justify-center items-center rounded-full"
          >
            Discover
          </a>
          <a
            href=""
            className=" font-semibold text-fs-14px text-gray-600 hover:text-white hover:bg-blue-500 w-pxl-78 h-pxl-32 flex justify-center items-center rounded-full"
          >
            Browse
          </a>
          <a
            href=""
            className=" font-semibold text-fs-14px text-gray-600 hover:text-white hover:bg-blue-500 w-pxl-78 h-pxl-32 flex justify-center items-center rounded-full"
          >
            Wishlist
          </a>
        </div>
        <div className="flex items-center justify-end w-6/12">
          <div className="search flex items-center bg-gray-800 rounded-full md:p-pxl-4 sm:p-pxl-3">
            <AiOutlineSearch size={16} className="text-gray-700 ml-pxl-8" />
            <input
              type="text"
              className=" bg-transparent pl-1 placeholder-white text-white sm:w-36 md:w-48"
              placeholder="Search"
            />
          </div>
          <FaBell
            size={24}
            className="text-gray-400 md:ml-pxl-32 sm:ml-pxl-18 flex-shrink-0"
          />
          <button className="profile  ml-pxl-18 flex-shrink-0">
            <img
              src="https://yt3.ggpht.com/yti/ANoDKi7ymtSF5Zrl3qgvwv8OpCuaMngCTSlKYPT898q41w=s88-c-k-c0x00ffffff-no-rj-mo"
              className="w-pxl-30 rounded-full"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
