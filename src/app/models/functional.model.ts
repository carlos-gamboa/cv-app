export class FunctionalModel {
  schoolName: string;
  schoolTitle: string;
  schoolCity: string;
  schoolYear: string;

  constructor(functional: any){
    this.schoolName = functional.schoolName;
    this.schoolTitle = functional.schoolTitle;
    this.schoolCity = functional.schoolCity;
    this.schoolYear = functional.schoolYear;
  }
}
