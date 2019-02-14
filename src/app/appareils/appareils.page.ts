import { Appareil } from './../models/Appareil.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AppareilsService } from '../services/appareils.service';
import { ModalAppareilPage } from '../modal-appareil/modal-appareil.page';

@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {

  appareilsList: Appareil[];

  constructor(private router: Router,
              private modalCtrl: ModalController,
              private appareilsService: AppareilsService) {}

  ngOnInit() {
    console.log('appareils initialisés...');
  }

  ionViewWillEnter() {
    this.appareilsList = this.appareilsService.appareilsList.slice();
  }

  onLoadAppareil(index: number) {
    this.router.navigate(['/single-appareil', { index: index}]);
  }

  async onLoadAppareilModal(index: number) {
    const modal = await this.modalCtrl.create({
      component: ModalAppareilPage,
      componentProps: {
        'index': index
      }
    });
    modal.present();
  }


  /*
  //V1: uniquement un string en paramètre
  onLoadAppareil(devicename: string) {
    this.router.navigate(['/single-appareil', { appareilName: [devicename] }]);
  }

  //V2: un object representé en JSON
  onLoadAppareil(appareil: {name: string, description: string[]}) {
    this.router.navigate(['/single-appareil', { appareil: JSON.stringify(appareil)}]);
  }

    async onLoadAppareilModal(appareil: {name: string, description: string[]}) {
    const modal = await this.modalCtrl.create({
      component: SingleAppareilPage,
      componentProps: {
        'appareil': appareil
      }
    });
    modal.present();
  }

  */

}
