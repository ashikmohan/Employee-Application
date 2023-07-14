import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent {

  constructor(private router:Router){ }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
