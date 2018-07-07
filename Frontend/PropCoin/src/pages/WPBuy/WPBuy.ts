import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-WPBuy',
  templateUrl: 'WPBuy.html'
})
export class WPBuyPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) { }


  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Your Private QR code',
      buttons: ['OK']
    });
    alert.present();
  }

  popQRcodeimg(){
    
  }
}
