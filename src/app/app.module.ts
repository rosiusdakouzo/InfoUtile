import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPrincipalPage } from '../pages/menuPrincipal/menuPrincipal';
import { NSInfoPage } from '../pages/nsInfo/nsInfo';
import { PolygonInfoPage } from '../pages/polygonInfo/polygonInfo';
import { RecodeInfoPage } from '../pages/recodeInfo/recodeInfo';
import { TNWInfoPage } from '../pages/tnwInfo/tnwInfo';

import { RecodeApiService } from '../services/recodeApi.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPrincipalPage,
    NSInfoPage,
    PolygonInfoPage,
    RecodeInfoPage,
    TNWInfoPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPrincipalPage,
    NSInfoPage,
    PolygonInfoPage,
    RecodeInfoPage,
    TNWInfoPage
  ],
  providers: [
    RecodeApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
