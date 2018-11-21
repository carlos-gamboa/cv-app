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
  chronologicActive: boolean;
  functionalActive: boolean;
  chronologicData: ChronologicModel[];
  functionalData: FunctionalModel[];
  skills: SkillsModel[];
  theme: string;

  constructor(cv: any) {
    this.name = cv.name;
    this.title = cv.title;
    this.mail = cv.mail;
    this.phone1 = cv.phone1;
    this.phone2 = cv.phone2;
    this.address = cv.address;
    this.personalProfile = cv.personalProfile;
    this.functionalActive = cv.functionalActive;
    this.address = cv.address;
    this.personalProfile = cv.personalProfile;
    this.chronologicActive = cv.chronologicActive;
    this.chronologicData = cv.chronologicData;
    this.functionalData = cv.functionalData;
    this.skills = cv.skills;
    this.theme = cv.theme;
  }
}
