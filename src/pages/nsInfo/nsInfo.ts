import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApiGlobal } from '../../models/apiGlobal.model';
import { RecodeApiService } from '../../services/recodeApi.service';

@Component({
  selector: 'page-nsInfo',
  templateUrl: 'nsInfo.html'
})
export class NSInfoPage {

  news: ApiGlobal = new ApiGlobal;
  constructor(public navCtrl: NavController, private recodeApiService: RecodeApiService) {
    
    this.recodeApiService.getArticlesNS()
    
      .then(newsFetched => {
      this.news = newsFetched;
      console.log(this.news);});
  }
}
