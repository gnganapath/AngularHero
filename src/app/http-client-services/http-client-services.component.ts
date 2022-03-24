import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators'

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
      let a = this.getData();
   }
   getData() {
      const response =  ajax('https://jsonplaceholder.typicode.com/users')
         .pipe(map(e => e.response));
        response.subscribe(res => {
         console.log(res);
         this.data = res;
      });
   }

  ngOnInit(): void {
  }

}
