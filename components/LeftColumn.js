import { motion } from "framer-motion";
import Image from "next/image";

const variant = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const zoomVariant = {
  initial: {
    width: "1px",
    height: "1px",
  },
  animate: {
    width: "6rem",
    height: "6rem",
    transition: {
      duration: 1.2,
    },
  },
  hover: {
    scale: 1.1,
  },
};

const LeftColumn = (props) => {
  return (
    <div className="grid h-full">
      <div className="flex flex-col overflow-none items-start">
        <div className="py-0 mt-2 2xl:mt-10"></div>

        <div className="w-full grid place-items-center">
          <motion.div
            variants={zoomVariant}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="w-28 h-28 bg-extra-100 rounded-full grid place-items-center cursor-pointer"
          >
            <h1 className="text-6xl text-primary pt-2">RT</h1>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col pt-0 mt-0 overflow-y-auto items-start">
        <div className="py-0">
          <h1 className="text-secondary text-2xl px-6 tracking-widest">INFO</h1>
        </div>
        <div className="ml-10">
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            className="py-2"
          >
            <h1 className="text-secondary">Name</h1>
            <h1 className="text-light text-extra-200">Robin Thomas</h1>
          </motion.div>
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            className="py-2"
          >
            <h1 className="text-secondary">Email</h1>
            <h1 className="text-light text-extra-200">
              mail2robbins@gmail.com
            </h1>
          </motion.div>
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            className="py-2"
          >
            <h1 className="text-secondary">Phone</h1>
            <h1 className="text-light text-extra-200">510-829-5044</h1>
          </motion.div>
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            className="py-2"
          >
            <h1 className="text-secondary">Location</h1>
            <h1 className="text-light text-extra-200">
              Middletown, NJ - 07748
            </h1>
          </motion.div>
        </div>

        <div className="pt-0">
          <h1 className="text-secondary text-2xl px-6 tracking-widest">
            EDUCATION
          </h1>
        </div>

        <div className="ml-10">
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            className="py-2"
          >
            <h1 className="text-secondary pr-2">
              2004 - Master's in information technology
            </h1>
            <h1 className="text-light text-extra-200 text-sm pr-2">
              Manipal Academy of Higher Education, Karnataka, India
            </h1>
          </motion.div>

          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            className="py-2"
          >
            <h1 className="text-secondary pr-2">
              1999 - Bachelor's in computer applications
            </h1>
            <h1 className="text-light text-extra-200 text-sm pr-2">
              Mahatma Gandhi University, Kerala, India
            </h1>
          </motion.div>
        </div>

        <div className="pt-0">
          <h1 className="text-secondary text-2xl px-6 pt-4 tracking-widest">
            SOCIAL
          </h1>
        </div>

        <div className="ml-10">
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            className="py-2"
          >
            <div className="flex flex-row justify-start space-x-2">
              <Image
                className="h-4 mt-1 rounded-sm"
                src="/linkedin-icon.png"
                width="16"
                height="16"
                alt="LinkedIn Logo"
              />
              <a
                href="http://www.linkedin.com/in/robin-thomas-b30649122"
                target="_blank"
                className="font-light text-blue-500 underline cursor-pointer tracking-wide hover:text-blue-300 hover:tracking-wider"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="grid h-full"></div>
    </div>
  );
};

export default LeftColumn;
