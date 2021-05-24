import { useEffect, useState } from "react";
import Head from "next/head";
import Sidebar from "./sidebar";
import ShortSidebar from "./shortSidebar";
import Navbar from "./navbar";
import TinyNav from "./tinyNav";
import Banner from "./banner";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
}

export default function Home() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className="body bg-gray-900">
        <section className="sidebar-section">
          {windowDimensions.width >= 1280 ? (
            <Sidebar />
          ) : windowDimensions.width < 1280 && windowDimensions.width >= 640 ? (
            <ShortSidebar />
          ) : windowDimensions.width <= 640 ? (
            <button className="absolute flex justify-center items-center border border-t-0 border-l-0 w-pxl-51 h-pxl-51 border-gray-700">
              <img src="/images/logo-circle.png" className="w-pxl-35" alt="" />
            </button>
          ) : (
            ""
          )}
        </section>
        <section className="nav xl:ml-64 lg:ml-24 md:ml-24 sm:ml-20 mb-pxl-54">
          {windowDimensions.width > 639 ? <Navbar /> : <TinyNav />}
        </section>
        <section className="banner lg:ml-24 md:ml-24 sm:ml-20 rounded-lg">
          <Banner />
        </section>
      </div>
    </div>
  );
}
