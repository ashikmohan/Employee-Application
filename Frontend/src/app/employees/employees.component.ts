import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  constructor(private router:Router){ }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
