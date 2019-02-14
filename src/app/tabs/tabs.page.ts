import { Component, OnInit } from '@angular/core';
import { AppareilsPage } from '../appareils/appareils.page';
import { SettingsPage } from '../settings/settings.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  appareilsPage = AppareilsPage;
  settingsPage = SettingsPage;

  constructor() { }

  ngOnInit() {
  }

}
