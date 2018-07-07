import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { MainPage } from '../';

//Terribly amount of spaghetti code needed to be fixed.

@IonicPage()
@Component({
  selector: 'page-trade-confirmation',
  templateUrl: 'tradeconfirmation.html'
})
export class TradeConfirmationPage {

  type: String;
  tradeAccount: String;
  buySellType: String;
  amount: Number;
  placePrice: Number;
  tradeBalance: Number;
  validityPeriod: String;

  constructor(public navCtrl: NavController, public menu: MenuController, public platform: Platform) {
    this.type = "Hong Kong Island";
    this.tradeAccount = "002729655"
    this.buySellType = "Buy";
    this.amount = 1;
    this.placePrice = 180239;
    this.tradeBalance = 180239;
    this.validityPeriod = "2018/07/06";
  }

  toTradeConfirmation(type: String, tradeAccount: String, buySellType: String, amount: Number, placePrice: Number, tradeBalance: Number, validityPeriod: String) {
    this.type = type;
    this.tradeAccount = tradeAccount;
    this.buySellType = buySellType;
    this.amount = amount;
    this.placePrice = placePrice;
    this.tradeBalance = tradeBalance;
    this.validityPeriod = validityPeriod;
  }

  confirm() {
    this.navCtrl.push(MainPage);
  }
}
