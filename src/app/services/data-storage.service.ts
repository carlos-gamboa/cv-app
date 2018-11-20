import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AuthService} from './auth.service';
import {CvService} from './cv.service';
import {Cv} from '../models/cv.model';


@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private cvService: CvService,
              private authService: AuthService) {
  }

  storeCv(cv: Cv): Promise<any> {
    const token = this.authService.getToken();
    const uid = this.authService.getCurrentUserId();
    return this.http.put('https://cv-app-40b38.firebaseio.com/cvs/' + uid + '.json', cv, {
      params: new HttpParams().set('auth', token)
    }).toPromise()
      .then(function(response) {
        console.log(response);
        let result: Cv = null;
        if (response) {
          result = new Cv(response);
        }
        return result;
      });
  }

  getCv(key: string): Promise<any> {
    const token = this.authService.getToken();
    return this.http.get<Cv>('https://cv-app-40b38.firebaseio.com/cvs/' + key + '.json', {
      params: new HttpParams().set('auth', token)
    }).toPromise()
      .then(function(response) {
        console.log(response);
        let cv: Cv = null;
        if (response) {
          cv = new Cv(response);
        }
        return cv;
      })
      .catch(
        () => null
      );
  }
}



