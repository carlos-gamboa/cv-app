export class ChronologicModel {
  companyName: string;
  companyRole: string;
  companyStart: string;
  companyFinish: string;
  companyFunction: string;

  constructor(cro: any){
    this.companyName = cro.companyName;
    this.companyRole = cro.companyRole;
    this.companyStart = cro.companyStart;
    this.companyFinish = cro.companyFinish;
    this.companyFunction = cro.companyFunction;
  }
}
