export class CertificationsModel {
    certificationName: string;
    certificationDate: string;
    certificationDescription: string;
    certificationURL: string;
    certificationSchool: string;

    constructor(cert: any) {
      this.certificationName = cert.certificationName;
      this.certificationDate = cert.certificationDate;
      this.certificationDescription = cert.certificationDescription;
      this.certificationURL = cert.certificationURL;
      this.certificationSchool = cert.certificationSchool;
    }
  }
