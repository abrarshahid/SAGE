"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import creator from "../../public/project.png";
import ShimmerButton from "./shimmer-button";

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const typingContainer = {
  hidden: { width: "0%" },
  visible: { 
    width: "100%", 
    transition: { duration: 2, ease: "easeInOut" } 
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
};

export default function IntroText() {
  return (
    <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-start">
      <motion.div
        className="relative mb-4 leading-tight"
        initial="hidden"
        animate="visible"
        variants={fadeVariants}
      >
        <h1
          className="absolute right-1 bottom-1 text-[8rem] md:text-[10rem] font-black text-white"
          aria-hidden="true"
        >
          SAGE
        </h1>
        <h1 className="text-[8rem] md:text-[10rem] font-black text-teal-500">
          SAGE
        </h1>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={imageVariants}>
        <Image className="mb-8" src={creator} alt="Project Image" />
      </motion.div>
      <motion.div
        className="overflow-hidden"
        style={{ whiteSpace: "nowrap" }}
        initial="hidden"
        animate="visible"
        variants={typingContainer}
      >
        <motion.p className="text-xl md:text-2xl text-teal-200 mb-8 shadow-text inline-block">
          Changing lives, a prediction at a time
        </motion.p>
      </motion.div>
      <motion.div
        className="space-x-4"
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
      >
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-teal-500 lg:text-lg">
            <b>GET SAGE</b>
          </span>
        </ShimmerButton>
        {/* Uncomment the button below if you want to add a secondary button */}
        {/* <Button
          variant="outline"
          className="text-emerald-600 border-white hover:bg-white hover:text-teal-900 shadow-text"
        >
          Learn More
        </Button> */}
      </motion.div>
    </div>
  );
}
