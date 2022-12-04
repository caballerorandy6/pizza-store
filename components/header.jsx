import Image from "next/legacy/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        className="flex flex-col items-center p-10"
      >
        <Link
          href="/"
          className="place-items-start font-semibold text-white w-11/12 mb-2 text-4xl"
        >
          <p> Pizza Joint</p>
        </Link>

        <div className="content-none border-b-2 w-11/12 border-x-white opacity-40"></div>
      </motion.div>
    </>
  );
};

export default Header;
