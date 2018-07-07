import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BalanceData, TransactionData } from '../Utility';
import { TradeConfirmationPage } from '../'

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})

export class WalletPage {

  action = "history";

  balanceData: BalanceData;
  transactionData: TransactionData[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

    this.balanceData = navParams.get('balanceData');
    this.transactionData = navParams.get('transactionData');

  }

  LOGToHKD(sellHKDValue) {
    if (isNaN(sellHKDValue)) return 0;
    return parseFloat(sellHKDValue) * 180239.0;
  }

  presentBuySellExceedAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['Dismiss']
    });

    alert.present();
  }

  countTransaction(transactionData, region) {
    return transactionData.filter(x => x.region == region).length;
  }

  gotoBuySellConfirmation(tempBalanceData, tempBuySellType, tempLOGAmount, tempHKDAmount) {

    if (tempBuySellType == "Buy" && tempHKDAmount > tempBalanceData.balance) {

      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'You do not have sufficient LOG to sell.',
        buttons: ['Dismiss']
      });
  
      alert.present();

    }
    else if (tempBuySellType == "Sell" && tempLOGAmount > tempBalanceData.coins) {

      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'You do not have sufficient HKD to buy LOG.',
        buttons: ['Dismiss']
      });
  
      alert.present();

    }
    else if (tempLOGAmount < 0 || tempHKDAmount < 0) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Please enter a valid amount of HKD/LOG.',
        buttons: ['Dismiss']
      });
  
      alert.present();
    }
    else {
      this.navCtrl.push(TradeConfirmationPage, {
        balanceData: tempBalanceData,
        buySellType: tempBuySellType,
        LOGAmount: tempLOGAmount,
        HKDAmount: tempHKDAmount
      });
    }
  }
}
