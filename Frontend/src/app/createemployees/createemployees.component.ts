import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createemployees',
  templateUrl: './createemployees.component.html',
  styleUrls: ['./createemployees.component.css']
})
export class CreateemployeesComponent {

  constructor(private router:Router){ }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
