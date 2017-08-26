export class Settings {
    ShowOptionalLanguages: boolean;
    PlayOriginalOnLoad: boolean;
    PlayLanguagesOnLoad: string[];
    AutoForward: boolean;

    constructor(){
        this.ShowOptionalLanguages = false;
        this.PlayOriginalOnLoad = true;
        this.PlayLanguagesOnLoad = ['English'];
        this.AutoForward = true;
    }
}