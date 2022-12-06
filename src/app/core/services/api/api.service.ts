import { map, Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  get(path: string,params:any): Observable<any>{
    return this.httpClient.get(`${path}`,{observe:'response',params});
  }
  post(path:string,body:any): Observable<any>{
    return this.httpClient.post(`${path}`,body);
  }
}
