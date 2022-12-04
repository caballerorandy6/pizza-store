import "../styles/globals.css";
import { PizzaProvider } from "../context/pizzaProvider";

function MyApp({ Component, pageProps }) {
  return (
    <PizzaProvider>
      <Component {...pageProps} />
    </PizzaProvider>
  );
}

export default MyApp;
