import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-dashboard',
  templateUrl: './angular-dashboard.component.html',
  styleUrls: ['./angular-dashboard.component.less']
})
export class AngularDashboardComponent implements OnInit {

  displayMode = 1;

  constructor() { }

  ngOnInit(): void {
  }

  //List View
  listView(){
    this.displayMode =2;
  }

  //Grid View
  gridView(){
    this.displayMode =1;
  }

}
