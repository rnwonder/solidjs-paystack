import { createSignal } from "solid-js";
import { PaystackProps, PaystackSuccessResponse } from "../interface";
import usePaystackScript from "./usePaystackScript";
import { openPopup } from "./openPopup";

type cb = (response: PaystackSuccessResponse) => void;

export const usePaystack = () => {
  const [config, setConfig] = createSignal<PaystackProps>({} as PaystackProps);
  const scriptState = usePaystackScript();

  function initializePayment(onSuccess?: cb, onCancel?: () => void) {
    if (scriptState().error) {
      throw new Error("Unable to load paystack inline script");
    }

    if (scriptState().loaded) {
      const paystackConfig = {
        ...config(),
        key: config().publicKey,
        onSuccess: onSuccess ? onSuccess : () => null,
        onCancel: onCancel ? onCancel : () => null,
      };
      openPopup(paystackConfig);
    }
  }

  return { initializePayment, setConfig };
};
