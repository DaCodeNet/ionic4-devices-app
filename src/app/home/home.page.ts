import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {
  }

  onGoToDevices() {
    console.log('go to appareils...');
    this.router.navigate(['/appareils']);
  }

  onGoToDevice() {
    console.log('go to single appareils...');
    this.router.navigate(['/single-appareil']);
  }



}
