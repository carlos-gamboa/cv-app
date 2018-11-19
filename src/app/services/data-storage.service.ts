import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, filter, catchError, mergeMap} from 'rxjs/operators';
import {AuthService} from './auth.service';
import {CvService} from './cv.service';
import {Cv} from '../models/cv.model';


@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private cvService: CvService,
              private authService: AuthService) {
  }

  storeCvs(cvArray: Cv[]) {
    //const token = this.authService.getToken();
    for (let x of cvArray) {
      this.http.post('https://cv-app-40b38.firebaseio.com/cvs.json', x).subscribe(
        (response) => console.log(response)
      );
    }
  }

  storeCv(cv: Cv): Promise<any>{
    //const token = this.authService.getToken();
    return this.http.post('https://cv-app-40b38.firebaseio.com/cvs.json', cv).toPromise()
      .then(function(response){
        console.log(response);
        let cv: Cv = null;
        if (response) {
          cv = new Cv(response);
        }
        return cv;
      });
  }



  getCvs(): Promise<any>{
    //const token = this.authService.getToken();
    return this.http.get<Cv[]>('https://cv-app-40b38.firebaseio.com/cvs.json').toPromise()
      .then(function(response){
        console.log(response);
        let cv: Cv[] = null;
        if (response) {
          cv = response;
        }
        return cv;
      });
  }


  getCv(key: string): Promise<any>{
    //const token = this.authService.getToken();
    return this.http.get<Cv>('https://cv-app-40b38.firebaseio.com/cvs/' + key +'.json').toPromise()
      .then(function(response){
        console.log(response);
        let cv : Cv = null;
        if(response) {
          cv = new Cv(response);
        }
        return cv;
      });
  }



}



