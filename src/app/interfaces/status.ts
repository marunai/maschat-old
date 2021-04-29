import { Account } from "./account";

export interface Status {
  id: number;
  content: string;
  account: Account;
}