export interface BalanceData {
  accountID: String;
  region: String;
  coins: Number;
  balance: Number;
  percentageChange: Number;
  img: String;
}

export interface TransactionData {
  date: String;
  type: String;
  amount: Number;
  region: String;
}