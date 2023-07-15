import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendAPIService } from '../backend-api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(private router:Router,private api:BackendAPIService){ }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
notesForm= new FormGroup({
  "Name":new FormControl(""),
  "Designation":new FormControl(""),
  "Location":new FormControl(""),
  "Salary":new FormControl("")
})

 onSubmit(){
  console.log(this.notesForm.value)
  this.api.Adddetails(this.notesForm.value).subscribe(data=>console.log(data))
 }


}
