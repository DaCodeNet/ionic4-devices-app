import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppareilsService } from './services/appareils.service';
import { ModalAppareilPage } from './modal-appareil/modal-appareil.page';
import { ModalAppareilPageModule } from './modal-appareil/modal-appareil.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [ModalAppareilPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ModalAppareilPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppareilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
