import { createSignal } from "solid-js";
import { PaystackConfig, PaystackSuccessResponse } from "../interface";
import usePaystackScript from "./usePaystackScript";
import { openPopup } from "./openPopup";

type cb = (response: PaystackSuccessResponse) => void;

export const usePaystack = () => {
  const [config, setConfig] = createSignal<PaystackConfig>({} as PaystackConfig);
  const scriptState = usePaystackScript();

  function initializePayment({
    onSuccess,
    onCancel,
    onBankTransferConfirmationPending,
  }: {
    onSuccess?: cb;
    onCancel?: () => void;
    onBankTransferConfirmationPending?: (arg: any) => void;
  }) {
    if (scriptState().error) {
      throw new Error("Unable to load paystack inline script");
    }

    if (scriptState().loaded) {
      const paystackConfig = {
        ...config(),
        key: config().publicKey,
        onSuccess: onSuccess ? onSuccess : () => null,
        onCancel: onCancel ? onCancel : () => null,
        onBankTransferConfirmationPending: onBankTransferConfirmationPending
          ? onBankTransferConfirmationPending
          : () => null,
      };
      openPopup(paystackConfig);
    }
  }

  return { initializePayment, setConfig };
};
