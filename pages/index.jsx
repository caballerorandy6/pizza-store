import Layout from "../components/layout";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <Layout title={"Home"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen flex flex-col items-center mt-44"
      >
        <p className="text-white text-6xl p-2 mb-8">Welcome to Pizza Joint</p>

        <Link href="/base" className="w-full text-center">
          <motion.button
            animate={{}}
            className="bg-transparent border-2 w-2/12 p-2 rounded-full text-white text-xl"
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
