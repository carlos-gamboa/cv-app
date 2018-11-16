import {ChronologicModel} from './chronological.model';
import {FunctionalModel} from './functional.model';
import {SkillsModel} from './skills.model';

export class Cv {
  name: string;
  title: string;
  mail: string;
  phone1: string;
  phone2: string;
  address: string;
  personalProfile: string;
  chronologicalActive: boolean;
  functionalActive: boolean;
  chronologicData: Array<ChronologicModel>;
  functionalData: Array<FunctionalModel>;
  skills: Array<SkillsModel>;

  constructor(cv: any){
    this.name = cv.name;
    this.title = cv.title;
    this.mail = cv.mail;
    this.phone1 = cv.phone1;
    this.phone2 = cv.phone2;
    this.address = cv.address;
    this.personalProfile = cv.personalProfile;
    this.chronologicalActive = cv.chronologicalActive;
    this.functionalActive = cv.functionalActive;
    this.address = cv.address;
    this.personalProfile = cv.personalProfile;
    this.chronologicalActive = cv.chronologicalActive;

    if (cv.chronologicData) {
      this.chronologicData = [];
      for (let chro of cv.chronologicData) {
        this.chronologicData.push(chro);
      }
    }

    if (cv.functionalData) {
      this.functionalData = [];
      for (let func of cv.functionalData) {
        this.functionalData.push(func);
      }
    }

    if (cv.skills) {
      this.skills = [];
      for (let skill of cv.skills) {
        this.skills.push(skill);
      }
    }
  }
}
