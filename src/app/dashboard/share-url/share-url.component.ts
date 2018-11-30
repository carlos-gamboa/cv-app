import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-share-url',
  templateUrl: './share-url.component.html',
  styleUrls: ['./share-url.component.css']
})
export class ShareUrlComponent implements OnInit {

  baseURL = 'localhost:4200/cv/';
  cvId;
  constructor(private dialogRef: MatDialogRef<ShareUrlComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.cvId = data.cvId;
  }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }

  copyURL(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}
