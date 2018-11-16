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
    for (let x of cvArray){
      this.http.post('https://cv-app-40b38.firebaseio.com/cvs.json', x).subscribe(
        (response) => console.log(response)
      );
    }
  }

  storeCv(cv: Cv) {
    //const token = this.authService.getToken();
      this.http.post('https://cv-app-40b38.firebaseio.com/cvs.json', cv).subscribe(
        (response) => console.log(response)
      );
    }


  getCvs() {
    //const token = this.authService.getToken();
    this.http.get<Cv[]>('https://cv-app-40b38.firebaseio.com/cvs.json').subscribe(
      (response) => this.cvService.setCvs(response)
    );

  }

}



