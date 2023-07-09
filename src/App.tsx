import type { Component } from "solid-js";
import { usePaystack } from "./lib/usePaystack";
import { getEnv } from "./utils/general";

const App: Component = () => {
  const { initializePayment, setConfig } = usePaystack();

  setConfig({
    publicKey: getEnv("VITE_PAYSTACK_PUBLIC_KEY"),
    email: "solidjs-paystack@yopmail.com",
    amount: 500000,
  });

  return (
    <div>
      <button
        onClick={() =>
          initializePayment(
            (response) => {
              console.log("success", response);
            },
            () => {
              console.log("closed payment");
            }
          )
        }
      >
        Pay Now
      </button>
    </div>
  );
};

export default App;
