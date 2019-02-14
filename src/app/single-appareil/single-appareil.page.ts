import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';
import { Appareil } from '../models/Appareil.model';
import { AppareilsService } from '../services/appareils.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {

  appareil: Appareil;
  index: number;

  constructor(public router: ActivatedRoute,
    public modalCtrl: ModalController,
    public appareilsService: AppareilsService
    ) { }

  ngOnInit() {
    /*
    //V1
    //this.name = this.router.snapshot.paramMap.get('appareilName');
    */
    this.index = this.router.snapshot.params['index'];
    this.appareil = this.appareilsService.appareilsList[this.index];
  }

  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }

}
