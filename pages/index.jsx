import Layout from "../components/layout";
import Link from "next/link";
import { motion } from "framer-motion";

const initVariants = {
  hidden: {
    opacity: 0,
    textShadow: "0px 0px 8px rgb(220, 220, 0)",
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
  textShadow: {
    textShadow: "0px 0px 5px rgb(220, 220, 0)",
  },
};

const Home = () => {
  return (
    <Layout title={"Home"}>
      <motion.div
        variants={initVariants}
        initial="hidden"
        animate="visible"
        className="h-screen flex flex-col items-center mt-44 "
      >
        <p className="text-6xl p-2 mb-8 text-yellow-300">
          Welcome to Pizza Joint
        </p>

        <Link href="/base" className="w-full text-center">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="bg-transparent text-yellow-300 opacity-80 w-2/12 p-2 rounded-full text text-xl border-2 border-yellow-300"
            type="button"
          >
            Create Your Pizza
          </motion.button>
        </Link>
      </motion.div>
    </Layout>
  );
};

export default Home;
