import { useContext } from "react";
import PizzaContext from "../context/pizzaProvider";

const usePizza = () => {
  return useContext(PizzaContext);
};

export default usePizza;
