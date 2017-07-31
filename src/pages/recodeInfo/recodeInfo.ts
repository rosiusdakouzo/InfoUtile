import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApiGlobal } from '../../models/apiGlobal.model';
import { RecodeApiService } from '../../services/recodeApi.service';

@Component({
  selector: 'page-recodeInfo',
  templateUrl: 'recodeInfo.html'
})
export class RecodeInfoPage {

  news: ApiGlobal = new ApiGlobal;
  constructor(public navCtrl: NavController, private recodeApiService: RecodeApiService) {
    
    this.recodeApiService.getArticlesRecode()
    
      .then(newsFetched => {
      this.news = newsFetched;
      console.log(this.news);});
  }
}
