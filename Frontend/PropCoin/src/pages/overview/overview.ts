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
      accountID: "002729655",
      img: "/assets/img/2.1_2.png",
      region: "HK Island",
      coins: 5.006,
      balance: 901195,
      percentageChange: 15.6,


    },
    {
      accountID: "002729655",
      img: "/assets/img/2.1_3.png",
      region: "Kowloon",
      coins: 2,
      balance: 303712,
      percentageChange: 0,
    },
    {
      accountID: "002729655",
      img: "/assets/img/2.1_4.png",
      region: "New Territories",
      coins: 4.967,
      balance: 141659,
      percentageChange: -10.31,
    }];

    this.transactionData = [
    {
      date: "04/07",
      type: "Buy",
      amount: 1,
      region: "HK Island",
    },
    {
      date: "03/07",
      type: "Buy",
      amount: 1,
      region: "Kowloon",
    },
    {
      date: "03/07",
      type: "Withdraw",
      amount: 1,
      region: "New Territories",
    },
    {
      date: "02/07",
      type: "Buy",
      amount: 1,
      region: "New Territories",
    },
    {
      date: "04/06",
      type: "Buy",
      amount: 1,
      region: "HK Island",
    },
    {
      date: "03/05",
      type: "Buy",
      amount: 1,
      region: "HK Island",
    },
    {
      date: "07/04",
      type: "Withdraw",
      amount: 1,
      region: "HK Island",
    },
    {
      date: "02/04",
      type: "Interest",
      amount: 0.01,
      region: "HK Island",
    }];
  }

  fetchUserName() {
    return "Gram";
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
    this.navCtrl.push(WalletPage, {
      balanceData: tempBalanceData,
      transactionData: tempTransactionData
    });
  }
}
