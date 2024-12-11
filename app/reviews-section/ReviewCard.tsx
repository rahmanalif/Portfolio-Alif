import slash from "../../public/shape-3.png";
import { motion } from "framer-motion";
import { reviewProps } from "./reviewDetails";
import Image from "next/image";

const ReviewCard = ({
  name,
  role,
  company,
  profileImage,
  testimonial,
  index,
}: reviewProps) => {
  const abbreviateName = (name: string): string => {
    const [firstname, lastname] = name.split(" ");
    return `${firstname} ${lastname[0]}`;
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 10,
        transition: {
          duration: 0.7,
          delay: 0.1 * index,
          ease: [0.44, 0, 0.22, 0.99]
        }
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      
      className="relative flex h-[400px] w-full flex-col items-start justify-between rounded-[23px] border border-[#202531] bg-transparent p-7 transition-all duration-300 hover:border-white   sm:items-center sm:justify-start lg:max-w-[438px]">
      <Image
        src={slash}
        alt={"title"}
        className="absolute top-[34px] left-[28px] w-12"
      />
      <p className="mt-20 text-lg font-medium leading-relaxed tracking-wide text-[#e4ded7]">
        {testimonial}
      </p>

      <div className="flex gap-3 sm:absolute sm:bottom-7 sm:left-7">
        <Image
          src={profileImage}
          alt={"title"}
          width={1600}
          height={840}
          className="h-[41px] w-[41px] rounded-full bg-contain bg-center object-cover"
        />

        <div className="flex flex-col gap-1 pr-7">
          <h3 className=" w-[175px] text-[23px] font-bold uppercase leading-[20.7px] tracking-[-0.46056px] text-[#e4ded7]">
            {abbreviateName(name)}
          </h3>
          <p className="text-sm font-medium leading-4 text-[#959790]">
            {role} @ {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
