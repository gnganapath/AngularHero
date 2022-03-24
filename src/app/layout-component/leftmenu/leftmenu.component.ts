import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.less']
})
export class LeftmenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateRoute(primaryUrl: any){
    this.router.navigate(["/", { outlets: { primary: [primaryUrl] }}])
  }
}
