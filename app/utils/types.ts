export type STATUS_TYPE = "INITIAL" | "INPROGRESS" | "SUCCESS" | "ERROR";

export interface IStatus {
  status: STATUS_TYPE;
  transactionType: string;
}

export interface OrderInfo {
  amount: number;
  price: number;
}
