import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {

  constructor(private http : HttpClient) { }

  private URL : string = "https://jsonplaceholder.typicode.com/todos/1";

  getDataObservable() : Observable<any> {
    return this.http.get(this.URL);
  }

  getDataPromise() : Promise<any> {
    return this.http.get(this.URL).toPromise();
  }

}
