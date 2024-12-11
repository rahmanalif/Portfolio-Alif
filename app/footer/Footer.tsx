import { motion } from "framer-motion";
import React from "react";
import AnimatedBody from "../animations/AnimatedBody";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <motion.div
      className="h-[15vh] w-full items-center justify-center bg-[#0e1016] pt-10 font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
      initial="initial"
      animate="animate"
    >
      <motion.div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-xs text-[#e4ded7] sm:text-xs md:text-sm lg:max-w-[1440px] lg:text-sm">
        <AnimatedBody text={`copyright  ${year}`} className="m-0 p-0" />

        <div className="flex flex-col sm:flex-row sm:gap-1 md:gap-2">
          <Link href="https://www.linkedin.com/in/mahmudur-rahman-alif/" target="_blank" aria-label="Github Profile">
            <span className="underline underline-offset-2 hover:no-underline">
            <AnimatedBody text="Github" className="m-0 p-0" />
            </span>  
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
