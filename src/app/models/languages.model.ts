export class LanguagesModel {

  language: string;
  languageLevel: string;
  languageKnowledge: number;

  constructor(languages: any) {
    this.language = languages.language;
    this.languageLevel = languages.languageLevel;
    this.languageKnowledge = languages.languageKnowledge;
  }
}
