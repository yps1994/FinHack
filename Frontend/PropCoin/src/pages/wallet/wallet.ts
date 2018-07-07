import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BalanceData, TransactionData } from '../Utility';

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})

export class WalletPage {

  region: string;

  balanceData: BalanceData;
 
  numTransactionProcessed: number;
  transactionData: TransactionData[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.balanceData.region = navParams.get('region');
    this.balanceData.coins = navParams.get('coins');
    this.balanceData.balance = navParams.get('balance');

  }



  PPCToHKD(sellHKDValue) {
    if (isNaN(sellHKDValue)) return 0;
    return parseFloat(sellHKDValue) * 180239.0;
  }
}
