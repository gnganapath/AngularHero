import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.less']
})
export class HttpClientComponent implements OnInit {

  constructor(private service: HttpServiceService) { }

  ngOnInit(): void {
    this.getObservableData();  // observable
     this.fetchData(); // promise call
  }
  //-------------------------------------------------------------------------------
  getObservableData(){
    this.service.getObservableData().subscribe( response => {
      console.log(response)
    })

  }
  //--
  fetchData(){
    // let prom = this.service.getPromiseCall();
    //  console.log(prom)

    this.service.fetchDataAsPromise().then((data) => {
        console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Promise rejected with " + JSON.stringify(error));
      });
  }

}
