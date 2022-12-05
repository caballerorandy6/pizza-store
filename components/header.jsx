import Image from "next/legacy/image";
import Link from "next/link";
import { motion } from "framer-motion";

const logoTextVariants = {
  hidden: {
    y: -250,
  },
  visible: {
    y: -10,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 120,
    },
  },
};

const hoverVariants = {
  whileHover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
  },
  textShadow: {
    textShadow: "0px 0px 5px rgb(220, 220, 0)",
  },
};

const Header = () => {
  return (
    <>
      <div className="-z-10 fixed h-screen bg-overlay w-full">
        <Image
          className="mix-blend-overlay bg-gradient-to-tr"
          src="/img/bg.jpg"
          alt="background image"
          layout="fill"
          priority
          objectFit="cover"
        />
      </div>

      <motion.div
        variants={logoTextVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center p-10"
      >
        <Link
          href="/"
          className="place-items-start font-semibold text-white w-11/12 mb-2 text-4xl"
        >
          <motion.p
            className="text-yellow-300 border-hidden"
            variants={hoverVariants}
            initial="textShadow"
          >
            {" "}
            Pizza Joint
          </motion.p>
        </Link>

        <div className="content-none border-b-2 w-11/12 border-x-white opacity-40 border-yellow-300"></div>
      </motion.div>
    </>
  );
};

export default Header;
