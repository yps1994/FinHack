import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})

export class OverviewPage {

  user: String = "";
  balance: String = "";

  constructor(public navCtrl: NavController) {
    this.user = this.fetchUserName();
    this.balance = this.fetchUserBalance();
  }

  fetchUserName(){
    return "Peter";
  }

  fetchUserBalance(){
    return "1,194,710";
  }

}
