import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  settingsRoot = SettingsPage;
  
  constructor() {
  }

  onChapterUpdated(event: any){
  }
}
