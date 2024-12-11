import React, { useRef } from "react";
import { ProjectProps } from "./projectDetails";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { devProjects } from "./projectDetails"; // Import devProjects if used in this file.
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons
import { FaGooglePlay } from "react-icons/fa"; // Import Play Store icon

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  image,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundColor: "#222",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className={`relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[550px] md:w-[100%] lg:h-[400px]`}
      initial="initial"
      animate="animate"
    >
      <Image
        src={image}
        alt={name}
        className={`absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[60%] ${
          id % 2 === 0 ? "right-0" : "left-0"
        }`}
      />

      <div
        className={`absolute text-white ${
          !(id % 2 === 0)
            ? "right-0 top-20 mr-0 md:right-0 md:ml-0 lg:right-0 lg:top-20 lg:mr-4"
            : "left-10 top-20 ml-0 md:mr-12 lg:top-20 lg:ml-4"
        } mb-10 md:mb-16 lg:mb-14`}
      >
        <h2 className="lg:text-[48px] text-[40px] font-bold">{name}</h2>
        <p className="mt-4 w-[90%] max-w-[457px] text-base font-semibold text-[#95979D]">
          {description}
        </p>

        <div className="mt-9 flex gap-4">
          {technologies.map((tech, id) => (
            <span
              key={id}
              className="text-sm font-bold uppercase md:text-base lg:text-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub and Play Store Buttons */}
      <div className="absolute bottom-10 left-10 flex gap-4">
        {/* GitHub Button */}
        {devProjects[id]?.github && (
          <a
            href={devProjects[id]?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-12 flex items-center justify-center bg-[#333] rounded-full hover:bg-[#444] transition-all shadow-lg"
          >
            <FaGithub className="text-white text-2xl" />
          </a>
        )}

        {/* Play Store Button */}
        {devProjects[id]?.playstore && (
          <a
            href={devProjects[id]?.playstore}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-12 flex items-center justify-center bg-[#34A853] rounded-full hover:bg-[#2D9244] transition-all shadow-lg"
          >
            <FaGooglePlay className="text-white text-2xl" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
