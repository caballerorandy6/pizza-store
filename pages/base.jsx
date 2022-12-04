import Link from "next/link";
import Layout from "../components/layout";
import usePizza from "../hooks/usePizza";
import { motion } from "framer-motion";

const Base = () => {
  const { pizza, bases, addBase } = usePizza();

  return (
    <Layout title={"Base"}>
      <div className="flex flex-col items-center p-6">
        <p className="place-items-start text-white w-3/12 text-4xl mt-44 mb-2">
          Step 1: Choose Your Base
        </p>
        <div className="content-none border-b-2 w-3/12 border-x-white mb-8 opacity-40"></div>
      </div>

      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li
              className="flex flex-col w-2/12 text-white text-xl mx-auto cursor-pointer hover:active"
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
          className="flex justify-center mt-8 "
        >
          <Link
            href="/toppings"
            className="bg-transparent border-2 w-2/12 p-2 rounded-full text-white text-xl text-center place-self-center"
          >
            <button className="font-semibold">Next</button>
          </Link>
        </motion.div>
      )}
    </Layout>
  );
};

export default Base;
