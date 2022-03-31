import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs-http',
  templateUrl: './rxjs-http.component.html',
  styleUrls: ['./rxjs-http.component.less']
})
export class RxjsHttpComponent implements OnInit {

   title = ''; 
   data :any;
  constructor() { }

   getData() {
      const response =  ajax('https://jsonplaceholder.typicode.com/users')
         .pipe(map(e => e.response));
        response.subscribe(res => {
         console.log(res);
         this.data = res;
      });
   }

  ngOnInit(): void {
    let a = this.getData();
  }

}
