import {ChronologicModel} from './chronological.model';
import {FunctionalModel} from './functional.model';
import {SkillsModel} from './skills.model';
import { CertificationsModel } from "./certifications.model";
import { PublicationsModel } from "./publications.model";
import { InterestsModel } from "./interests.model";
import { LanguagesModel } from "./languages.model";
import {SocialMediaModel} from './social-media.model';

export class Cv {
  name: string;
  title: string;
  mail: string;
  phone1: string;
  phone2: string;
  address: string;
  personalProfile: string;
  introduction: string;
  chronologicActive: boolean;
  functionalActive: boolean;
  skillsActive: boolean;
  languagesActive: boolean;
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
  languages: LanguagesModel[];
  socialMediaData: SocialMediaModel;
  template: string;
  theme: string;

  // Custom
  languageDisplay: string;
  skillsDisplay: string;
  percentageDisplay: string;
  titleFont: string;
  textFont: string;

  constructor(cv: any) {
    this.name = cv.name;
    this.title = cv.title;
    this.mail = cv.mail;
    this.phone1 = cv.phone1;
    this.phone2 = cv.phone2;
    this.address = cv.address;
    this.personalProfile = cv.personalProfile;
    this.introduction = cv.introduction;
    this.address = cv.address;
    this.personalProfile = cv.personalProfile;
    this.chronologicActive = cv.chronologicActive;
    this.functionalActive = cv.functionalActive;
    this.skillsActive = cv.skillsActive;
    this.languagesActive = cv.languagesActive;
    this.certificationsActive = cv.certificationsActive;
    this.interestsActive = cv.interestsActive;
    this.contactActive = cv.contactActive;
    this.publicationsActive = cv.publicationsActive;
    this.chronologicData = cv.chronologicData;
    this.functionalData = cv.functionalData;
    this.skills = cv.skills;
    this.languages = cv.languages;
    this.template = cv.template;
    this.theme = cv.theme;
    this.certificationsData = cv.certificationsData;
    this.publicationsData = cv.publicationsData;
    this.interestsData = cv.interestsData;
    this.socialMediaData = cv.socialMediaData;

    // Custom
    this.languageDisplay = cv.languageDisplay;
    this.skillsDisplay = cv.skillsDisplay;
    this.percentageDisplay = cv.percentageDisplay;
    this.titleFont = cv.titleFont;
    this.textFont = cv. textFont;
  }
}
