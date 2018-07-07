import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TradeConfirmationPage } from './tradeconfirmation';

@NgModule({
  declarations: [
    TradeConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(TradeConfirmationPage),
  ],
  exports: [
    TradeConfirmationPage
  ]
})
export class TradeConfirmationModule { }
