import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Auth2Service } from '../auth2.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  User={
    email:'',
    password:''
  }

  constructor(private authserve:Auth2Service,private router:Router){ }


 

  // display1() {
  //   console.log(this.User);
  //   this.authserve.senddetails1(this.User).subscribe((res) => {
  //     console.log(res);
  //     if (res.adminToken) {
  //         localStorage.setItem('adminToken',res.adminToken);
  //         this.router.navigate(['/dashboard/admin']);
  //       } 
       
  //   });
  // }


  display1() {
    console.log(this.User);
    this.authserve.senddetails1(this.User).subscribe((res) => {
      console.log(res);
      if (res.adminToken) {
        localStorage.setItem('adminToken', res.adminToken);
        this.router.navigate(['/dashboard/admin']);
      } else {
        console.log('Admin login failed');
      }
    });
  }
  
}





