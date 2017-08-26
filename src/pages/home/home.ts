import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Iterator } from '../../data/iterator';
import { Settings } from '../../data/settings';
import { Globals, Chapter, Verse } from '../../data/datamodel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  verse: Verse;

  constructor(public navCtrl: NavController) {
    this.verse = new Iterator(new Settings(), new Globals()).Next();
  }

}
