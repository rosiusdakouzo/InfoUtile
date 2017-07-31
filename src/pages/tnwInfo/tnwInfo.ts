import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApiGlobal } from '../../models/apiGlobal.model';
import { RecodeApiService } from '../../services/recodeApi.service';

@Component({
  selector: 'page-tnwInfo',
  templateUrl: 'tnwInfo.html'
})
export class TNWInfoPage {

  news: ApiGlobal = new ApiGlobal;
  constructor(public navCtrl: NavController, private recodeApiService: RecodeApiService) {
    
    this.recodeApiService.getArticlesTNW()
    
      .then(newsFetched => {
      this.news = newsFetched;
      console.log(this.news);});
  }
}
