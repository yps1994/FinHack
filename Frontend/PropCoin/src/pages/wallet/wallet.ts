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

  PPCToHKD(sellHKDValue) {
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

  gotoBuySellConfirmation(tempBalanceData, tempBuySellType, tempPPCAmount, tempHKDAmount) {

    if (tempBuySellType == "Buy" && tempHKDAmount > tempBalanceData.balance) {

      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'You do not have sufficient PPC to sell.',
        buttons: ['Dismiss']
      });
  
      alert.present();

    }
    else if (tempBuySellType == "Sell" && tempPPCAmount > tempBalanceData.coins) {

      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'You do not have sufficient HKD to buy PPC.',
        buttons: ['Dismiss']
      });
  
      alert.present();

    }
    else if (tempPPCAmount < 0 || tempHKDAmount < 0) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Please enter a valid amount of HKD/PPC.',
        buttons: ['Dismiss']
      });
  
      alert.present();
    }
    else {
      this.navCtrl.push(TradeConfirmationPage, {
        balanceData: tempBalanceData,
        buySellType: tempBuySellType,
        PPCAmount: tempPPCAmount,
        HKDAmount: tempHKDAmount
      });
    }
  }
}
