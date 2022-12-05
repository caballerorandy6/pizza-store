import Layout from "../components/layout";
import Link from "next/link";
import usePizza from "../hooks/usePizza";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    //Es lo mismo que esto initial={{ x: "100vw", textShadow: "0px 0px 8px rgb(220, 220, 0)" }}
    opacity: 0,
    x: "100vh",
    textShadow: "0px 0px 8px rgb(220, 220, 0)",
  },
  visible: {
    //animate={{ x: 0 }
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      when: "beforeChildren",
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

const Toppings = () => {
  const { pizza, addToppings, toppings } = usePizza();

  return (
    <Layout title={"Toppings"}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center p-6">
          <p className="text-center w-3/12 text-4xl mt-44 mb-2 text-yellow-300">
            Step 2: Choose Toppings
          </p>
          <div className="content-none border-b-2 w-2/12 border-x-white mb-8 opacity-40  border-yellow-300"></div>
        </div>

        <ul>
          {toppings.map((topping) => {
            let spanClass = pizza.toppings.includes(topping) ? "active" : "";
            return (
              <motion.li
                variants={itemVariants}
                whileHover="itemStyled"
                className="flex flex-col w-2/12 text-white text-xl mx-auto  cursor-pointer hover:active"
                key={topping}
                onClick={() => addToppings(topping)}
              >
                <span className={spanClass}>{topping}</span>
              </motion.li>
            );
          })}
        </ul>

        {pizza.base && (
          <div className="flex justify-center mt-8 ">
            <Link href="/order" className="w-full text-center">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="bg-transparent opacity-80 text-yellow-300 w-2/12 p-2 rounded-full text text-xl border-2 border-yellow-300"
                type="button"
              >
                Order
              </motion.button>
            </Link>
          </div>
        )}
      </motion.div>
    </Layout>
  );
};

export default Toppings;
