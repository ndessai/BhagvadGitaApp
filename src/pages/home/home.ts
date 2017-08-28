import { Component, Output, EventEmitter } from '@angular/core';
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

  @Output()
  ChapterUpdated: EventEmitter<string> = new EventEmitter<string>();

  constructor(public navCtrl: NavController) {
    this.iterator = new Iterator(new Settings(), new Globals());
    this.verse = this.iterator.Next();
    this.updateChapter(this.verse.Chapter);
  }

  onSanskritEnded(event: any){
    this.verse = this.iterator.Next();
    this.updateChapter(this.verse.Chapter);
    event.target.load();
  }

  updateChapter(chapter: Chapter){
    this.chapter = chapter;
    this.ChapterUpdated.emit(chapter.Id + ". " + chapter.Name);
  }
}
