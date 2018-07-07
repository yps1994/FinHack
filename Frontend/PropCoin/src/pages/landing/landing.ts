import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController) {
    
  }

  gotoWallet() {
    this.navCtrl.setRoot('HomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
