import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BalanceData, TransactionData } from '../Utility';
import { WalletPage } from '../';

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})

export class OverviewPage {

  user: String = "";
  balance: String = "";

  balanceData: BalanceData[];
  transactionData: TransactionData[];


  constructor(public navCtrl: NavController) {
    this.user = this.fetchUserName();
    this.balance = this.fetchUserBalance();

    this.balanceData = [{
      region: "HK Island",
      coins: 5.006,
      balance: 901195,
      percentageChange: 15.6,
    },
    {
      region: "Kowloon",
      coins: 2,
      balance: 303712,
      percentageChange: 0,
    },
    {
      region: "New Territories",
      coins: 1,
      balance: 141659,
      percentageChange: -10.31,
    }];

    this.transactionData = [
    {
      date: "4/7",
      type: "Buy",
      amount: 1,
      region: "HK Island",
    },
    {
      date: "3/7",
      type: "Buy",
      amount: 1,
      region: "Kowloon",
    },
    {
      date: "3/7",
      type: "Withdraw",
      amount: 1,
      region: "New Territories",
    },
    {
      date: "2/7",
      type: "Buy",
      amount: 1,
      region: "New Territories",
    },
    {
      date: "4/6",
      type: "Buy",
      amount: 1,
      region: "HK Island",
    },
    {
      date: "3/5",
      type: "Buy",
      amount: 1,
      region: "HK Island",
    },
    {
      date: "7/4",
      type: "Withdraw",
      amount: 1,
      region: "HK Island",
    },
    {
      date: "2/4",
      type: "Interest",
      amount: 0.01,
      region: "HK Island",
    }];
  }

  fetchUserName() {
    return "Steven";
  }

  fetchUserBalance(){
    return "1,194,710";
  }

  showPercentage(percentage) {
    if (percentage > 0) return "+" + percentage.toString() + "%";
    else if (percentage < 0) return percentage.toString() + "%";

    return "";
  }

  gotoCorrespondingWallet(tempBalanceData, tempTransactionData) {
    console.log(tempTransactionData);
    this.navCtrl.push(WalletPage, {
      balanceData: tempBalanceData,
      transactionData: tempTransactionData
    });
  }
}
