import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboarduser',
  templateUrl: './dashboarduser.component.html',
  styleUrls: ['./dashboarduser.component.css']
})
export class DashboarduserComponent {

  constructor(private router:Router){ }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
