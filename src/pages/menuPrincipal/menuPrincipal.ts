import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import {  } from 'ionic-angular';
import { NSInfoPage } from '../nsInfo/nsInfo';
import { PolygonInfoPage } from '../polygonInfo/polygonInfo';
import { RecodeInfoPage } from '../recodeInfo/recodeInfo';
import { TNWInfoPage } from '../tnwInfo/tnwInfo';

@Component({
  selector: 'page-menuPrincipal',
  templateUrl: 'menuPrincipal.html'
})
export class MenuPrincipalPage {

  public sourceInfo: string;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
  }

  private openInfoNS() {
    this.navCtrl.push(NSInfoPage);
  }
  
  private openInfoPolygon() {
    this.navCtrl.push(PolygonInfoPage);
  }
  private openInfoRecode() {
    this.navCtrl.push(RecodeInfoPage, { sourceInfo: this.sourceInfo });
  }

  private openInfoTNW() {
    this.navCtrl.push(TNWInfoPage);
  }
}
