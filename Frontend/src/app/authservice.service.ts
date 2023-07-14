import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }

  senddetails(data:any){
    return this.http.post<any>('http://localhost:5000/login',data)
  }
  

}

