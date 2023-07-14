import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  User={
    email:'',
    password:''
  }

  constructor(private authserve:AuthserviceService,private router:Router){ }


  display(){
    console.log(this.User);
    this.authserve.senddetails(this.User).subscribe((res=>{
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['/employees'])  //navigate
     }))

    
    }

}
