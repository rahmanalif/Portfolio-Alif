import Image from "next/image";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 w-full items-center justify-center overflow-hidden  bg-[#fff]  bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
    >
      <Image
        src={"/bg_blur-min.png"}
        alt="bg"
        width={1920}
        height={1080}
        className="absolute top-0 left-0  h-full w-full bg-cover"
      />

      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "Uncover Our Journey: Together, We are Shaping a Promising Future."
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
          className="mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#333] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
        />

        <div className="mx-auto flex w-full flex-col">
          <div className="mb-10 flex w-full flex-col gap-4 text-lg font-medium leading-relaxed tracking-wide text-[#333] md:mb-16 md:gap-6 md:text-xl lg:mb-16 lg:text-2xl">
            <AnimatedBody
              text={
                "Hello there! I’m Mahmudur Rahman, hailing from the vibrant streets of Bangladesh, where the chaos of rickshaws and the aroma of street-side fuchka fuel creativity. Growing up in this bustling cultural hub, I found my way into the digital world, armed with nothing but curiosity and a knack for solving problems."
              }
            />
            <AnimatedBody
              text={
                "I wear many hats—coder, indie game developer, and occasional Android app magician. With a passion for Unity and C#, I’ve brought games to life that might just make you miss your subway stop. I’ve also dabbled in Flutter and Dart to create sleek apps that blend functionality with flair. Oh, and did I mention? I’m a proud self-learner who believes in diving into the deep end—because what’s life without a little debugging adventure?"
              }
            />
            <AnimatedBody
              text={
                "When I’m not crafting digital wonders, I’m busy soaking in the magic of storytelling. Watching movies is my favorite way to travel across galaxies, relive history, or just sit through a plot twist that makes me question my existence."
              }
            />

            <AnimatedBody
              text={
                "I’m on a never-ending quest to watch all the good films (and some not-so-good ones, because hey, they’re fun too)."
              }
            />
            <AnimatedBody
              text={
                "If life is a movie, I’m playing the lead role of a curious creator who loves a good laugh, a great story, and the thrill of building something meaningful—one line of code at a time."
              }
            />
          </div>

          <div className="mb-24 flex justify-between items-start w-full flex-row gap-4 text-lg font-normal leading-relaxed tracking-wide text-[#333]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-base md:leading-normal lg:mt-0 lg:mb-16 lg:text-lg">
            
            <div className="flex flex-col gap-4 md:gap-3 w-1/3">
              <AnimatedTitle
                text={"Programming Languages"}
                className="text-2xl text-[#333] md:text-3xl lg:text-xl"
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />

              <AnimatedBody
                text={
                  "C#, C++, Dart, JavaScript, NextJS, Python, SQL."
                }
              />
            </div>

            <div className="flex flex-col gap-4 md:gap-3 w-1/3">
              <AnimatedTitle
                text={"Game Development"}
                className="text-2xl text-[#333] md:text-3xl lg:text-xl"
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />

              <AnimatedBody
                text={
                  "Unity, C#, Visual Studio, GitHub, Blender, Unity Asset Management,"
                }
              />
            </div>
            
            <div className="flex flex-col gap-4 md:gap-3 w-1/3">
              <AnimatedTitle
                text={"Mobile Development"}
                className="text-2xl text-[#333] md:text-3xl lg:text-xl"
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />

              <AnimatedBody
                text={
                  "Flutter, Dart, Firebase, Android App Development, REST APIs."
                }
              />
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
