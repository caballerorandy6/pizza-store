import Layout from "../components/layout";
import usePizza from "../hooks/usePizza";

const Order = () => {
  const { pizza, toppings } = usePizza();
  return (
    <Layout title={"Order"}>
      <div className="flex flex-col items-center p-6">
        <p className="place-items-start text-white w-3/12 text-4xl mt-44 mb-2">
          Thank you for your order :)
        </p>
        <p className="place-items-start text-white w-3/12 text-2xl mt-10 mb-2">
          You ordered a {pizza.base} Pizza with:
        </p>
        {pizza.toppings.map((topping) => (
          <div key={topping} className="text-white text-xl uppercase">
            {topping}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Order;
