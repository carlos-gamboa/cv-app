import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataStorageService} from '../services/data-storage.service';
import {Cv} from '../models/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  cvId: string;
  cv: Cv;
  readyToShow: boolean = false;

  constructor(private dataStorageService: DataStorageService, private route: ActivatedRoute, private router: Router) {
    this.cvId = this.route.snapshot.params['id'];

    this.dataStorageService.getCv(this.cvId).then((cv: Cv)=>{
      this.cv = cv;
      this.readyToShow = true;
    }).catch( reason => {
      console.log("Failed")
    });
  }

  ngOnInit() {
  }

}
