import { createSignal } from "solid-js";
import {PaystackProps} from "../interface";
import usePaystackScript from "./usePaystackScript";
import {openPopup} from "./openPopup";

type cb = (response?: any) => void;

export const usePaystack = () => {
  const [config, setConfig] = createSignal<PaystackProps>({} as PaystackProps);
  const scriptState = usePaystackScript();

  function initializePayment(callback?: cb, onClose?: cb) {
    if (scriptState().error) {
      throw new Error("Unable to load paystack inline script");
    }

    if (scriptState().loaded) {
      const paystackConfig = {
        ...config(),
        key: config().publicKey,
        onSuccess: callback ? callback : () => null,
        onCancel: onClose ? onClose : () => null,
      };
      openPopup(paystackConfig);
    }
  }

  return { initializePayment, setConfig };
};
