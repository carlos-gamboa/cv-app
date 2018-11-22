export class InterestsModel {
  interestName: string;
  interestText: string;

  constructor(ints: any) {
    this.interestName = ints.interestName;
    this.interestText = ints.interestText;
  }
}
