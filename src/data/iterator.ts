import { Settings } from './settings';
import { Globals, Chapter, Verse } from './datamodel';

export class Iterator {
    private currentChapter?: Chapter;
    private currentVerse?: Verse;

    private globals: Globals;
    private settings: Settings;

    constructor(settings: Settings, globals: Globals){
        this.currentChapter = null;
        this.currentVerse = null;
        this.settings = settings;
        this.globals = globals;
    }

    Next(): Verse {
        if(this.currentChapter == null && this.currentVerse == null) {
            this.currentChapter = this.globals.Chapters[0];
            this.currentVerse = this.currentChapter.First();
        } else if (this.currentVerse.Id == this.currentChapter.Last().Id) {
            this.currentChapter = this.currentChapter.Id == 18?
                this.globals.Chapters[0]: this.globals.Chapters[this.currentChapter.Id];
            this.currentVerse = this.currentChapter.First();
        } else {
            this.currentVerse = this.currentVerse.Next();
        }
        this.currentVerse.Resolve(this.globals);
        return this.currentVerse;
    }
}