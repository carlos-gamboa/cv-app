import {ChronologicModel} from './chronological.model';
import {FunctionalModel} from './functional.model';
import {SkillsModel} from './skills.model';
import { CertificationsModel } from "./certifications.model";
import { PublicationsModel } from "./publications.model";
import { InterestsModel } from "./interests.model";

export class Cv {
  name: string;
  title: string;
  mail: string;
  phone1: string;
  phone2: string;
  address: string;
  personalProfile: string;
  introduction: string;
  websiteURL: string;
  chronologicActive: boolean;
  functionalActive: boolean;
  skillsActive: boolean;
  certificationsActive: boolean;
  publicationsActive: boolean;
  interestsActive: boolean;
  contactActive: boolean;
  chronologicData: ChronologicModel[];
  functionalData: FunctionalModel[];
  certificationsData: CertificationsModel[];
  publicationsData: PublicationsModel[];
  interestsData: InterestsModel[];
  skills: SkillsModel[];

  constructor(cv: any) {
    this.name = cv.name;
    this.title = cv.title;
    this.mail = cv.mail;
    this.phone1 = cv.phone1;
    this.phone2 = cv.phone2;
    this.address = cv.address;
    this.personalProfile = cv.personalProfile;
    this.introduction = cv.introduction;
    this.websiteURL = cv.websiteURL;
    this.address = cv.address;
    this.personalProfile = cv.personalProfile;
    this.chronologicActive = cv.chronologicActive;
    this.functionalActive = cv.functionalActive;
    this.skillsActive = cv.skillsActive;
    this.certificationsActive = cv.certificationsActive;
    this.interestsActive = cv.interestsActive;
    this.contactActive = cv.contactActive;
    this.publicationsActive = cv.publicationsActive;
    this.chronologicData = cv.chronologicData;
    this.functionalData = cv.functionalData;
    this.skills = cv.skills;
    this.certificationsData = cv.certificationsData;
    this.publicationsData = cv.publicationsData;
    this.interestsData = cv.interestsData;
  }
}
