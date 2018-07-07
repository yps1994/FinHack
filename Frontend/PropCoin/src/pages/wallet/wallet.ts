import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BalanceData, TransactionData } from '../Utility';

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})

export class WalletPage {

  action = "buy";

  balanceData: BalanceData;
  transactionData: TransactionData[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.balanceData = navParams.get('balanceData');
    this.transactionData = navParams.get('transactionData');

  }

  PPCToHKD(sellHKDValue) {
    if (isNaN(sellHKDValue)) return 0;
    return parseFloat(sellHKDValue) * 180239.0;
  }
}
