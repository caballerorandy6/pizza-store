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
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
    textShadow: "0px 0px 8px rgb(220, 220, 0)",
  },
  visible: {
    opacity: 1,
  },
};

const Order = () => {
  const { pizza, toppings } = usePizza();
  return (
    <Layout title={"Order"}>
      <motion.div
        className="flex flex-col items-center p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-center w-3/12 text-4xl text-yellow-300 mt-44 mb-2"
          initial={{ textShadow: "0px 0px 8px rgb(220, 220, 0)" }}
        >
          Thank you for your order :)
        </motion.p>
        <div className="content-none border-b-2 w-2/12 border-x-white opacity-40  border-yellow-300"></div>

        <motion.p
          variants={childrenVariants}
          className="text-center text-white w-3/12 text-2xl mt-10 mb-2"
        >
          You ordered a {pizza.base} Pizza with:
        </motion.p>
        <motion.div variants={childrenVariants}>
          {pizza.toppings.map((topping) => (
            <div key={topping} className="text-white text-xl">
              {topping}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Order;
