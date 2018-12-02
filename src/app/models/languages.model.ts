export class LanguagesModel {

  language: string;
  languageLevel: string;
  languageKnowledge: number;
  languagesDisplay: string;

  constructor(languages: any) {
    this.language = languages.language;
    this.languageLevel = languages.languageLevel;
    this.languageKnowledge = languages.languageKnowledge;
    this.languagesDisplay = languages.languagesDisplay;
  }
}
