import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CvService} from '../services/cv.service';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import {ShareUrlComponent} from './share-url/share-url.component';
import {AuthService} from '../services/auth.service';
import {Cv} from '../models/cv.model';
import {DataStorageService} from '../services/data-storage.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  uid: string;
  cv: Cv;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private authService: AuthService,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
    this.uid = this.authService.getCurrentUserId();
    this.dataStorageService.getCv(this.uid).then((cv: Cv) => {
      this.cv = cv;
    });
  }

  goToEdit() {
    this.router.navigate([`/cv/${this.uid}/edit`]);
  }

  goToView() {
    window.open(environment.activeUrl + `/cv/${this.uid}`, '_blank'); //use this to open in a new tab
    //this.router.navigate([`/cv/${this.uid}`]); //use this to navigate
  }

  goToCreate() {
    this.router.navigate([`/cv/new`]);
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      cvId: this.uid
    };
    this.dialog.open(ShareUrlComponent, dialogConfig);
  }
}

