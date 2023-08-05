export interface PaystackConfig {
  publicKey: string;
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: number | string;
  amount: number;
  ref?: string;
  metadata?: PaystackMetadata;
  currency?: "NGN" | "GHS" | "USD" | "ZAR" | string;
  channels?: PaymentChannels[];
  label?: string;
  plan?: string;
  quantity?: number;
  subaccount?: string;
  transaction_charge?: number;
  bearer?: Bearer;
  split_code?: string;
  split?: Record<string, any>;
}

type PaymentChannels =
  | "bank"
  | "card"
  | "qr"
  | "ussd"
  | "mobile_money"
  | "bank_transfer"
  | string;

type Bearer = "account" | "subaccount" | string;

interface PaystackMetadata {
  custom_fields?: PaystackCustomFields[];
  cancel_action?: string;
  custom_filters?: PaystackCustomFilter;
  [key: string]: any;
}

interface PaystackCustomFilter {
  recurring?: boolean;
  banks?: string[];
  card_brands?: Array<"visa" | "verve" | "master" | string>;
}

interface PaystackCustomFields {
  display_name?: string;
  variable_name?: string;
  value?: any;
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
