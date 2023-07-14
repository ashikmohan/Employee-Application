import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {

  constructor(private http:HttpClient) { }

  senddetails1(data:any){
    return this.http.post<any>('http://localhost:5000/adminlogin',data)
  }
}
