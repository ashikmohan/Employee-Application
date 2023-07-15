import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendAPIService } from '../backend-api.service';

@Component({
  selector: 'app-dashboarduser',
  templateUrl: './dashboarduser.component.html',
  styleUrls: ['./dashboarduser.component.css']
})
export class DashboarduserComponent {
  cards:any[]=[];
  constructor(private router:Router,private api:BackendAPIService){ }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  
  ngOnInit(){
    this.api.getCards().subscribe((res:any)=>{
      this.cards=res.data;
      
    })
  }
}
