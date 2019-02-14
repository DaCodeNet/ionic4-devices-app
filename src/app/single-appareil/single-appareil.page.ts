import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {

  //V1 
  //name: string;

  appareil: {
    name: string,
    description: string[];
  };

  constructor(private router: ActivatedRoute ) { }

  ngOnInit() {
    //V1 
    //this.name = this.router.snapshot.paramMap.get('appareilName');
        
    this.appareil = JSON.parse(this.router.snapshot.params['appareil']);

  }


}
