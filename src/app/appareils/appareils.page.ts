import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { SingleAppareilPage } from '../single-appareil/single-appareil.page';

@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {

  appareilsList = [
    {
      name: 'Machine à laver',
      description: [
        'Volume: 6 litres',
        'Temps de lavage: 2 heures',
        'Consommation: 173 kWh/an'
      ]
    },
    {
      name: 'Télévision',
      description: [
        'Dimensions: 40 pouces',
        'Consommation: 22 kWh/an'
      ]
    },
    {
      name: 'Ordinateur',
      description: [
        'Marque: fait maison',
        'Consommation: 500 kWh/an'
      ]
    }
  ];

  constructor(private router: Router, private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log('appareils initialisés...');
  }

  /*
  onLoadAppareil(devicename: string) {
    this.router.navigate(['/single-appareil', { appareilName: [devicename] }]);
  }
  */

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

}
