import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../';

export interface BalanceData {
  region: string;
  coins: number;
  balance: number;
}

export interface TransactionData {
  date: string;
  type: string;
  amount: number;
}

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})

export class WalletPage {

  walletRegion: string;

  balanceData: BalanceData;
 
  numTransactionProcessed: number;
  transactionData: TransactionData[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.balanceData = {
      region: "HK Island",
      coins: 5.006,
      balance: 901195
    };

    this.transactionData = [
    {
      date: "4/7",
      type: "Buy",
      amount: 1,
    },
    {
      date: "3/7",
      type: "Buy",
      amount: 1,
    },
    {
      date: "3/7",
      type: "Withdraw",
      amount: 1,
    },
    {
      date: "2/7",
      type: "Buy",
      amount: 1,
    },
    {
      date: "4/6",
      type: "Buy",
      amount: 1,
    },
    {
      date: "3/5",
      type: "Buy",
      amount: 1,
    },
    {
      date: "7/4",
      type: "Withdraw",
      amount: 1,
    },
    {
      date: "2/4",
      type: "Interest",
      amount: 0.01
    }];
  }

    /*
    this.balanceData.region = navParams.get('region');
    this.balanceData.coins = navParams.get('coins');
    this.balanceData.balance = navParams.get('balance');
    */

  PPCToHKD(sellHKDValue) {
    if (isNaN(sellHKDValue)) return 0;
    return parseFloat(sellHKDValue) * 180239.0;
  }
}
