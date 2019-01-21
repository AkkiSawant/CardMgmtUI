import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/mycardsolutions/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RestService {
    
  constructor(private http: HttpClient) { }

private extractData(res: Response) {
  let body = res;
  return body || { };
}

getCities(stateCode,countryCode): Observable<any>{ 
    var o = {
        "StateCode":stateCode,
        "CountryCode":countryCode
    }
    
 return this.http.post(endpoint + 'GetCityList',o)
        .pipe(map(this.extractData));
}
    
}
