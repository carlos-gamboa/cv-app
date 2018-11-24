import { Injectable } from '@angular/core';
import {Cv} from '../models/cv.model';
import {Subject} from 'rxjs';

@Injectable()
export class CvService {

  private _cvs: Cv[];
  private _cv: Cv;
  private emitChangeSource = new Subject<any>();
  public changeEmittedHideHeader = this.emitChangeSource.asObservable();

  constructor() {
    this._cvs = [];
  }

  emitChangeHideHeader(change: any) {
    this.emitChangeSource.next(change);
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
