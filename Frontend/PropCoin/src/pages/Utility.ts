export interface BalanceData {
  region: string;
  coins: number;
  balance: number;
  percentageChange: number;
}

export interface TransactionData {
  date: string;
  type: string;
  amount: number;
  region: string;
}