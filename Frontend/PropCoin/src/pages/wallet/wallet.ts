import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../';

export interface BalanceData {
  region: string;
  coins: number;
  balance: number;
}

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})

export class WalletPage {

  balanceData: BalanceData;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.balanceData = {
      region: "Hong Kong Island",
      coins: 5.006,
      balance: 901195
    };

    /*
    this.balanceData.region = navParams.get('region');
    this.balanceData.coins = navParams.get('coins');
    this.balanceData.balance = navParams.get('balance');
    */
  }

  PPCToHKD(sellHKDValue) {
    if (isNaN(sellHKDValue)) return 0;
    return parseFloat(sellHKDValue) * 180239.0;
  }
}
