export class LanguagesModel {

  language: string;
  languageKnowledge: number;
  languagesDisplay: string;

  constructor(languages: any) {
    this.language = languages.language;
    this.languageKnowledge = languages.languageKnowledge;
    this.languagesDisplay = languages.languagesDisplay;
  }
}
