import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html'
})
export class TransferPage {

  sendAddress: any;

  constructor(public navCtrl: NavController, public menu: MenuController, public platform: Platform) {
    this.sendAddress = "";
  }

  //For now, do nothing and WIP.
  sendCoins() {
    console.log(this.sendAddress)
  }
}
