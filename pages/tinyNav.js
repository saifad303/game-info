import { FaBell } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const TinyNav = () => {
  return (
    <div className="tiny-nav justify-between text-white ml-pxl-50 flex items-center h-pxl-51 border-b border-gray-700">
      <div className="search flex items-center bg-gray-800 rounded-md w-8/12 ml-pxl-9">
        <AiOutlineSearch size={24} className="text-gray-700 ml-pxl-8" />
        <input
          type="text"
          className=" bg-transparent pl-4 placeholder-white text-white h-pxl-40 w-10/12"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center">
        <button>
          <FaBell size={24} className=" ml-pxl-15" />
        </button>
        <button className="profile  ml-pxl-15 flex-shrink-0 mr-pxl-20">
          <img
            src="https://yt3.ggpht.com/yti/ANoDKi7ymtSF5Zrl3qgvwv8OpCuaMngCTSlKYPT898q41w=s88-c-k-c0x00ffffff-no-rj-mo"
            className="w-pxl-30 rounded-full"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default TinyNav;
