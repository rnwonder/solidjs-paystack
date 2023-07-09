export interface PaystackProps {
  publicKey: string;
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: number | string;
  amount: number;
  ref?: string;
  metadata?: PaystackMetadata;
  currency?: "NGN" | "GHS" | "USD" | "ZAR";
  channels?: PaymentChannels[];
  label?: string;
  plan?: string;
  quantity?: number;
  subaccount?: string;
  transaction_charge?: number;
  bearer?: Bearer;
  "data-custom-button"?: string;
  split_code?: string;
  split?: Record<string, any>;
}

type PaymentChannels = "bank" | "card" | "qr" | "ussd" | "mobile_money";

type Bearer = "account" | "subaccount";

interface PaystackMetadata {
  custom_fields: PaystackCustomFields[];
}

interface PaystackCustomFields {
  display_name: string;
  variable_name: string;
  value: any;
}

export interface PaystackSuccessResponse {
  message?: string;
  redirecturl?: string;
  reference?: string;
  status?: string;
  trans?: string;
  transaction?: string;
  trxref?: string;
  [key: string]: any;
}
