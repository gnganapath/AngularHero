import { Injectable } from '@angular/core';
import{ HttpClient,HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs'
import { shareReplay, switchMap, map, share,  retry, catchError} from 'rxjs/operators';

@Injectable()
export class HttpServiceService {

   baseUrl = environment.httpAPIUrl;
  constructor(private http: HttpClient) { }

  public getObservableData():Observable<any>{
    return this.http.get<any>(this.baseUrl).pipe( retry(3), catchError( this.handlerror ));
  }


  public getPromiseCall(){
    const promise = this.http.get(this.baseUrl).toPromise();
      console.log(promise);  
      promise.then((data :any)=>{
        console.log("Promise resolved with: " + JSON.stringify(data));
      }, (error: any)=>{
        console.log("Promise rejected with " + JSON.stringify(error));
      })
  }

  fetchDataAsPromise() {
    return this.http.get(this.baseUrl).toPromise();
  }


  private handlerror(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError('Something bad happened; please try again later.');
  }
}
