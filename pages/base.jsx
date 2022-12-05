import Link from "next/link";
import Layout from "../components/layout";
import usePizza from "../hooks/usePizza";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vh",
    textShadow: "0px 0px 8px rgb(220, 220, 0)",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      when: "beforeChildren",
    },
  },
};

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
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

const itemVariants = {
  itemStyled: {
    scale: 1.3,
    originX: 0,
    color: "#f8e112",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const Base = () => {
  const { pizza, bases, addBase } = usePizza();

  return (
    <Layout title={"Base"}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center p-6 ">
          <p className="text-center w-3/12 text-4xl mt-44 mb-2 text-yellow-300">
            Step 1: Choose Your Base
          </p>
          <div className="content-none border-b-2 w-2/12 border-x-white mb-8 opacity-40 border-yellow-300"></div>
        </div>

        <ul>
          {bases.map((base) => {
            let spanClass = pizza.base === base ? "active" : "";
            return (
              <motion.li
                variants={itemVariants}
                whileHover="itemStyled"
                className="flex flex-col w-2/12 text-white text-xl mx-auto cursor-pointer hover:active"
                key={base}
                onClick={() => addBase(base)}
              >
                <span className={spanClass}>{base}</span>
              </motion.li>
            );
          })}
        </ul>

        {pizza.base && (
          <motion.div
            variants={nextVariants}
            className="flex justify-center mt-8"
          >
            <Link href="/toppings" className="w-full text-center">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="bg-transparent opacity-80 text-yellow-300 w-2/12 p-2 rounded-full text text-xl border-2 border-yellow-300"
                type="button"
              >
                Next
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </Layout>
  );
};

export default Base;
