import { Injectable } from '@angular/core';
import {Cv} from '../models/cv.model';

@Injectable()
export class CvService {

  private _cvs: Cv[];
  private _cv: Cv;

  constructor() {
    this._cvs = [];
  }

  setCv(cv: Cv): void {
    this._cv = cv;
  }

  getCv(): Cv {
    return this._cv;
  }

  getCvs(): Cv[] {
    return this._cvs;
  }

  setCvs(cv: Cv[]): void {
    this._cvs = cv;
  }

  getCVId() {
    return 0;
  }
}
