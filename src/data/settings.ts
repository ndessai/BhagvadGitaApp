export class Settings {
    ShowOptionalLanguages: bool;
    PlayOriginalOnLoad: bool;
    PlayLanguagesOnLoad: string[];
    AutoForward: bool;

    constructor(){
        this.ShowOptionalLanguages = false;
        this.PlayOriginalOnLoad = true;
        this.PlayLanguagesOnLoad = ['English'];
        this.AutoForward = true;
    }
}