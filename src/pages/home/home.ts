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
  iterator: Iterator;
  chapter: Chapter;

  constructor(public navCtrl: NavController) {
    this.iterator = new Iterator(new Settings(), new Globals());
    this.verse = this.iterator.Next();
    this.chapter = this.verse.Chapter;
  }

  onSanskritEnded(event: any){
    console.log(event);
    this.verse = this.iterator.Next();
    event.target.load();
  }
}
