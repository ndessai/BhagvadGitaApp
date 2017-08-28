import { String } from './string';

export class Feed {
    readonly Host: string;
    readonly ImageDir: string;
    readonly AudioDir: string;

    constructor(host: string, imageDir: string, audioDir: string){
        this.Host = host;
        this.ImageDir = imageDir;
        this.AudioDir = audioDir;
    }
}

export class Language {
    Id: number;
    Name: string;
    DisplayName: string;
    IsOptional: boolean;

    constructor(id: number, name: string, displayName?: string){
        this.Id = id;
        this.Name = name;
        this.DisplayName = String.IsNullOrWhiteSpace(displayName)? name: displayName;
        this.IsOptional = name == 'Sanskrit';
    }
}

export enum LinkType {
    Image,
    Audio
}

export class Link {
    Type: LinkType


}

export class Verse {
    ChapterId: number;
    Id: number;
    Shloka: string;
    Transliteration: string;
    Anvaya: string;
    Translation: string;
    Sanskrit: string;
    Chapter: Chapter;

    constructor(chapterId: number, id: number){
        this.Id = id;
        this.ChapterId = chapterId;
    }

    Next() : Verse{
        this.Id++;
        return this;
    }

    Resolve(globals: Globals) {
        this.Chapter = globals.Chapters[this.ChapterId -1];
        //http://www.bhagavad-gita.org/AudioArchive/Gita/Sanskrit/verses/01-02.mp3
        this.Sanskrit = String.Format("{0}{1}{2}{3}{4}-{5}.{6}",
            globals.Source.Host, globals.Source.AudioDir, "Sanskrit", "/verses/",
            this.ChapterId < 10? "0" + this.ChapterId: this.ChapterId.toString(),
            this.Id < 10? "0" + this.Id: this.Id.toString(), "mp3" );
        //http://www.bhagavad-gita.org/Gita/png/verse-01-02-1.png
        this.Shloka = String.Format("{0}{1}{2}-{3}-{4}-{5}.{6}",
            globals.Source.Host, globals.Source.ImageDir, "verse",
            this.ChapterId < 10? "0" + this.ChapterId: this.ChapterId.toString(),
            this.Id < 10? "0" + this.Id: this.Id.toString(),
            "1", "png");

        //http://www.bhagavad-gita.org/Gita/png/verse-01-02-2.png
        this.Transliteration = String.Format("{0}{1}{2}-{3}-{4}-{5}.{6}",
            globals.Source.Host, globals.Source.ImageDir, "verse",
            this.ChapterId < 10? "0" + this.ChapterId: this.ChapterId.toString(),
            this.Id < 10? "0" + this.Id: this.Id.toString(),
            "2", "png");

        //http://www.bhagavad-gita.org/Gita/png/verse-01-02-3.png
        this.Anvaya = String.Format("{0}{1}{2}-{3}-{4}-{5}.{6}",
            globals.Source.Host, globals.Source.ImageDir, "verse",
            this.ChapterId < 10? "0" + this.ChapterId: this.ChapterId.toString(),
            this.Id < 10? "0" + this.Id: this.Id.toString(),
            "3", "png");

        //http://www.bhagavad-gita.org/Gita/png/verse-01-02-4.png
        this.Translation = String.Format("{0}{1}{2}-{3}-{4}-{5}.{6}",
            globals.Source.Host, globals.Source.ImageDir, "verse",
            this.ChapterId < 10? "0" + this.ChapterId: this.ChapterId.toString(),
            this.Id < 10? "0" + this.Id: this.Id.toString(),
            "4", "png");
    }
}

export class Chapter {
    Id: number;
    Name: string;
    MaxVerse: number;

    constructor(id: number, name: string, maxVerse: number){
        this.Id = id;
        this.Name = name;
        this.MaxVerse = maxVerse;
    }

    First(): Verse {
        return new Verse(this.Id, 1);
    }

    Last(): Verse {
        return new Verse(this.Id, this.MaxVerse);
    }
}

export class Globals {
    readonly Source : Feed;
    readonly Chapters: Chapter [];
    readonly Languages: Language [];
    readonly OptionalLanguages: Language[];

    constructor(){
        this.Source = new Feed('http://www.bhagavad-gita.org', '/Gita/png/', '/AudioArchive/Gita/');
        this.Chapters = [
            new Chapter(1, 'Visada Yoga', 46),
            new Chapter(2, 'Sankhya Yoga', 72),
            new Chapter(3, 'Karma Yoga', 43),
            new Chapter(4, 'Jnana Yoga', 42),
            new Chapter(5, 'Karma Vairagya Yoga', 29),
            new Chapter(6, 'Abhyasa Yoga', 47),
            new Chapter(7, 'Paramhamsa Vijnana Yoga', 30),
            new Chapter(8, 'Aksara Parabrahman Yoga', 28),
            new Chapter(9, 'Raja Vidya Guhya Yoga', 34),
            new Chapter(10, 'Vibhuti Vistara Yoga', 42),
            new Chapter(11, 'Visvarupa Darsana Yoga', 55),
            new Chapter(12, 'Bhakti Yoga', 20),
            new Chapter(13, 'Ksetra Ksetrajna Vibhaga Yoga', 35),
            new Chapter(14, 'Gunatraya Vibhaga Yoga', 27),
            new Chapter(15, 'Purusottama Yoga', 20),
            new Chapter(16, 'Daivasura Sampad Vibhaga Yoga', 24),
            new Chapter(17, 'Sraddhatraya Vibhaga Yoga', 28),
            new Chapter(18, 'Moksa Upadesa Yoga', 78),
        ];
        this.Languages = [
            new Language (1, 'Sanskrit'),
            new Language (2, 'Hindi'),
            new Language (3, 'Bengali'),
            new Language (4, 'English'),
            new Language (5, 'Dutch'),
            new Language (6, 'German'),
            new Language (7, 'Greek'),
            new Language (8, 'Chinese'),
            new Language (9, 'Japanese'),
            new Language (8, 'French'),
            new Language (9, 'Spanish'),
            new Language (10, 'Italian'),
            new Language (11, 'Portuguese'),
            new Language (12, 'Hebrew'),
            new Language (13, 'Arabic'),
            new Language (14, 'Serbian'),
            new Language (15, 'Russian')
        ];

        this.OptionalLanguages = new Array();
        for(let language of this.Languages){
            if(language.IsOptional){
                this.OptionalLanguages.push(language);
            }
        }
    }
}