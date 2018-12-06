import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataStorageService} from '../services/data-storage.service';
import {Cv} from '../models/cv.model';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  cvId: string;
  cv: Cv;
  readyToShow = false;
  profile_picture = null;

  constructor(
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private cvService: CvService
  ) {
  }

  ngOnInit() {
    this.cvService.emitChangeHideHeader(true);
    this.route.params.subscribe(
      (params) => {
        this.cvId = params['id'];
        this.dataStorageService.getCv(this.cvId).then((cv: Cv) => {
          if (cv) {
            this.cv = cv;
            if (this.cv.hasProfilePic) {
              this.dataStorageService.getImage(this.cvId).then((image: any) => {
                if (image) {
                  this.profile_picture = image;
                } else {
                  this.profile_picture = null;
                }
              }).catch(reason => {
                this.profile_picture = null;
              });
            }
            this.readyToShow = true;
          } else {
            this.router.navigate(['/']);
          }
        }).catch( reason => {
          console.log('Failed');
        });
      }
    );
  }

  ngOnDestroy() {
    this.cvService.emitChangeHideHeader(false);
  }

}
