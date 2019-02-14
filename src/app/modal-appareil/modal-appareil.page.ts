import { Component, OnInit } from '@angular/core';
import { Appareil } from '../models/Appareil.model';
import { NavParams, ModalController } from '@ionic/angular';
import { AppareilsService } from '../services/appareils.service';

@Component({
  selector: 'app-modal-appareil',
  templateUrl: './modal-appareil.page.html',
  styleUrls: ['./modal-appareil.page.scss'],
})
export class ModalAppareilPage implements OnInit {

  appareil: Appareil;
  index: number;

  constructor(public modalCtrl: ModalController,
    public appareilsService: AppareilsService,
    public navParams: NavParams) { }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.appareil = this.appareilsService.appareilsList[this.index];
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }

}
