import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams, Platform } from 'ionic-angular';
import { MainPage } from '../';
import { BalanceData } from '../Utility';

//Terribly amount of spaghetti code needed to be fixed.

@IonicPage()
@Component({
  selector: 'page-trade-confirmation',
  templateUrl: 'tradeconfirmation.html'
})
export class TradeConfirmationPage {

  balanceData: BalanceData;
  buySellType: String;
  LOGAmount: Number;
  HKDAmount: Number;
  validityPeriod: String = "2018/07/06";

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public platform: Platform) {

    this.balanceData = navParams.get('balanceData');
    this.buySellType = navParams.get('buySellType');
    this.LOGAmount = navParams.get('LOGAmount');
    this.HKDAmount = navParams.get('HKDAmount');

  }

  calculateTradeBalance() {
    if (this.buySellType == "Buy") return (this.balanceData.balance + this.HKDAmount) ;
    else return (this.balanceData.balance - this.HKDAmount);
  }

  confirm() {
    this.navCtrl.push(MainPage);
  }
}