import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //loginByEmail(form:LoginI):Observable<ResponseI>{
    //let direccion= this.url + "auth"
    //return this.http.post<ResponseI>(direccion,form)

  //}

  public get(url:string){
    return this.http.get(url); //GET
  }

  public post(url:string, body){
    return this.http.post(url,body);
  }
}
