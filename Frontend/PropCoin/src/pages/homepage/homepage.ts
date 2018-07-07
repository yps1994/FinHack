import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  doLogin() {
    this.gotoMainPage();
  }

  createWallet() {
    this.gotoMainPage();
  }
  
  gotoMainPage() {
    this.navCtrl.push(MainPage);
  }
}
