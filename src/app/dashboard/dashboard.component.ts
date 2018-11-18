import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cvId;

  constructor(private router: Router, private route: ActivatedRoute) {
    // TODO call ws to know if there's a cv

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

  ngOnInit() {
  }

}
