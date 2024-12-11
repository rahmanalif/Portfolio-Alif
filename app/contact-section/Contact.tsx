import { motion } from "framer-motion";
import Image from "next/image";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import Link from "next/link";
import { bodyAnimation } from "../animations/animations";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[95vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28 3xl:h-[75vh]"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <Image
        src={"/bg_blur-min.png"}
        alt="bg"
        width={1920}
        height={1080}
        className="absolute  top-0 left-0 h-full w-full bg-cover"
      />

      <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-start justify-center ${monaSans.className} relative w-full sm:items-center lg:max-w-[1440px]`}
        >
          <AnimatedWords2
            title={"Lets Connect"}
            style="flex max-w-[500px] flex-col items-start text-left text-[150px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[170px] md:text-[200px] lg:text-center lg:text-[270px] xl:text-[300px] "
          />
        </div>

        <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className="flex w-[350px] max-w-[90%] flex-col items-end text-right text-sm font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-sm md:w-[310px] md:items-start md:text-left md:text-base lg:w-[420px] lg:text-base">
            <AnimatedBody
              text="Got a question, proposal, project, or want to work together on something?"
              className="-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3
            lg:-mb-4"
            />

            <div className="mt-5 flex w-[298px] items-center gap-1 md:w-[335px] md:gap-2.5">
              <Link
                href={"/"}
                aria-label="Send me and email"
                className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[170px] md:mt-3 lg:mt-4"
              >
                <AnimatedBody
                  text="Send me an email"
                  className="w-[190px] pr-10 md:w-[170px] md:pr-0"
                />
              </Link>

              <AnimatedBody
                text="or"
                className="-mb-1 ml-2 inline-block overflow-hidden sm:-mb-2 md:-ml-2 md:-mb-3 lg:-mb-4"
              />

              <Link
                href={"https://cal.com"}
                target="_blank"
                aria-label="Send me and email"
                className="mt-1 w-[110px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:-ml-[3px] md:w-[120px] lg:mt-4"
              >
                <AnimatedBody
                  text="Book a call"
                  className="w-[110px] md:w-[120px]"
                />
              </Link>
            </div>
          </div>

          <div className="flex gap-10 text-base font-bold text-[#e4ded7] sm:gap-14 sm:text-2xl md:gap-10 md:text-base  lg:gap-20 lg:text-3xl">
            <Link
              href={"https://github.com/rahmanalif"}
              target="_blank"
              aria-label="View Github website"
            >
              <motion.p variants={bodyAnimation}>
                <AiFillGithub size={24} />
              </motion.p>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/mahmudur-rahman-alif/"}
              target="_blank"
              aria-label="View Youtube website"
            >
              <motion.p variants={bodyAnimation}>
                <AiFillLinkedin size={24} />
              </motion.p>
            </Link>
            <Link
              href={"https://x.com/m_rahmanalif/"}
              target="_blank"
              aria-label="View Github website"
            >
              <motion.p variants={bodyAnimation}>
                <AiFillTwitterCircle size={24} />
              </motion.p>
            </Link>
            <Link
              href={"https://www.instagram.com/mahmudur_rahman_aliff/"}
              target="_blank"
              aria-label="View Github website"
            >
              <motion.p variants={bodyAnimation}>
                <AiFillInstagram size={24} />
              </motion.p>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
