import { createContext, useState } from "react";

const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const bases = ["Classic", "Thin & Crispy", "ThickCrust"];
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addToppings = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = [pizza.toppings.filter((item) => item !== topping)];
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <PizzaContext.Provider
      value={{ pizza, bases, addBase, addToppings, toppings }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export { PizzaProvider };

export default PizzaContext;
