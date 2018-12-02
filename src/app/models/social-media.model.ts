export class SocialMediaModel {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  googleplus: string;
  websiteURL: string;
  skype: string;
  constructor(socialMedia: any) {
    this.facebook = socialMedia.facebook;
    this.twitter = socialMedia.twitter;
    this.linkedin = socialMedia.linkedin;
    this.instagram = socialMedia.instagram;
    this.googleplus = socialMedia.googleplus;
    this.websiteURL = socialMedia.websiteURL;
    this.skype = socialMedia.skype;
  }
}
