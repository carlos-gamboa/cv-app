import { Injectable } from '@angular/core';
import {Cv} from '../models/cv.model';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {DataStorageService} from './data-storage.service';

@Injectable()
export class CvService {

  private _cvs: Cv[];
  private _cv: Cv;

  constructor() {
    this._cvs = [];
  }

  ngOnInit() {
  }

  setCv(cv: Cv): void {
    this._cv = cv;
  }

  getCv(): Cv{
    return this._cv;
  }

  getCvs(): Cv[]{
    return this._cvs;
  }

  setCvs(cv: Cv[]): void {
    this._cvs = cv;
  }

  getCVId() {
    return 1;
  }
}
