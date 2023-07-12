import type { Component } from "solid-js";
import { usePaystack } from "./lib/usePaystack";
import { getEnv } from "./utils/general";

const App: Component = () => {
  const { initializePayment, setConfig } = usePaystack();

  setConfig({
    publicKey: getEnv("VITE_PAYSTACK_PUBLIC_KEY"),
    email: "solidjs-paystack@yopmail.com",
    amount: 200000,
    metadata: {
      userId: "my cool id",
      cancel_action: "http://localhost:3000/cancel",
      custom_filters: {
        recurring: true,
        card_brands: ["master"],
      },
    },
  });

  return (
    <div>
      <button
        onClick={() =>
          initializePayment({
            onSuccess: (response) => {
              console.log("success", response);
            },
            onCancel: () => {
              console.log("closed payment");
            },
            onBankTransferConfirmationPending: (data) => {
              console.log("onBankTransferConfirmationPending", data);
            },
          })
        }
      >
        Pay Now
      </button>
    </div>
  );
};

export default App;
