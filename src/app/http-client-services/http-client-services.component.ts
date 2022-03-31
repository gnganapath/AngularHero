import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-http-client-services',
  templateUrl: './http-client-services.component.html',
  styleUrls: ['./http-client-services.component.less']
})
export class HttpClientServicesComponent implements OnInit {

   title = '';
   data :any;
   constructor() {
      //this.data = "";
      this.title = "Using RxJs with Angular";
      
   }
  

  ngOnInit(): void {
    //let a = this.getData();
  }

}
