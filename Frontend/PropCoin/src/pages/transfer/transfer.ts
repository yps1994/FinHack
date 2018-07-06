import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html'
})
export class TransferPage {

  constructor(public navCtrl: NavController, public menu: MenuController, public platform: Platform) {
   
  }

  //For now, do nothing and WIP.
  gotoWallet() {
  
  }


}
