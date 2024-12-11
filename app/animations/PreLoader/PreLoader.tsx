"use client";

import { useEffect } from "react";
import { preLoaderAnime } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnime();
  });
  return (
    <div className="preloader gap-[5px] overflow-hidden text-sm sm:gap-[10px] sm:text-lg lg:text-xl">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-sm font-extrabold opacity-0 sm:gap-[10px] sm:text-base md:text-lg lg:text-xl">
        <span>Developer,</span>
        <span>Creator,</span>
        <span>cinephile</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
