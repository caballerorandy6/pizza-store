import Layout from "../components/layout";
import Link from "next/link";
import usePizza from "../hooks/usePizza";

const Toppings = () => {
  const { pizza, addToppings, toppings } = usePizza();

  return (
    <Layout title={"Toppings"}>
      <div className="flex flex-col items-center p-6">
        <p className="place-items-start text-white w-3/12 text-4xl mt-44 mb-2">
          Step 2: Choose Toppings
        </p>
        <div className="content-none border-b-2 w-3/12 border-x-white mb-8 opacity-40"></div>
      </div>

      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li
              className="flex flex-col w-2/12 text-white text-xl mx-auto cursor-pointer hover:active"
              key={topping}
              onClick={() => addToppings(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="flex justify-center mt-8 ">
          <Link
            href="/order"
            className="bg-transparent border-2 w-2/12 p-2 rounded-full text-white text-xl text-center place-self-center"
          >
            <button className="font-semibold">Order</button>
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Toppings;
