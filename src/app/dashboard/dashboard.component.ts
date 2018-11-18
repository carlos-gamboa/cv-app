import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CvService} from '../services/cv.service';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import {ShareUrlComponent} from './share-url/share-url.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cvId;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private cvService: CvService,
              private dialog: MatDialog) {
    this.cvId = cvService.getCVId();
  }


  ngOnInit() {
  }


  goToEdit() {
    this.router.navigate([`cv/${this.cvId}/edit`]);
  }

  goToView() {
    this.router.navigate([`cv/${this.cvId}`]);
  }

  goToCreate() {
    this.router.navigate([`cv/new`]);
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      cvId: this.cvId
    };
    this.dialog.open(ShareUrlComponent, dialogConfig);
  }
}

