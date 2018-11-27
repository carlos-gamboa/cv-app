export class LanguagesModel {

  language: string;
  languageKnowledge: number;

  constructor(languages: any) {
    this.language = languages.language;
    this.languageKnowledge = languages.languageKnowledge;
  }
}
