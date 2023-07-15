import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendAPIService } from '../backend-api.service';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent {
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
editItem(id:any){
  
  this.router.navigate(['/editItem'])
}
}
