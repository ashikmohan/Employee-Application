import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  constructor(private http:HttpClient) { }

  Adddetails(data:any){
return this.http.post('http://localhost:5000/api/edit',data)
  }

  getCards(){
    return this.http.get('http://localhost:5000/api/getItem')
  }

  getOneItem(id:any){
    return this.http.get(`http://localhost:5000/api/getOneItem/${id}`)
  }
}
