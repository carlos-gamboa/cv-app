import { Injectable } from '@angular/core';
import {Cv} from '../models/cv.model';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class CvService {

  private _cvs: Cv[];

  constructor() {
    this._cvs = [];
  }

  ngOnInit() {
  }

  addCv(cv: Cv): void {
    this._cvs.push(cv);
  }

  getCvs(): Cv[]{
    return this._cvs;
  }

  setCvs(cv: Cv[]): void {
    this._cvs = cv;
  }

}
