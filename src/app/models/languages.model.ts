export class LanguagesModel {

  language: string;
  languageDisplay: string;
  languageLevel: string;
  languageKnowledge: number;

  constructor(languages: any) {
    this.language = languages.language;
    this.languageDisplay = languages.languageDisplay;
    this.languageLevel = languages.languageLevel;
    this.languageKnowledge = languages.languageKnowledge;
  }
}
