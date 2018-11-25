export class PublicationsModel {
    publicationName: string;
    publicationDate: string;
    publicationDescription: string;
    publicationURL: string;
    publicationSite: string;

    constructor(pubs: any) {
      this.publicationName = pubs.publicationName;
      this.publicationDate = pubs.publicationDate;
      this.publicationDescription = pubs.publicationDescription;
      this.publicationURL = pubs.publicationURL;
      this.publicationSite = pubs.publicationSite;
    }
  }
