import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendAPIService } from '../backend-api.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {
  constructor(private router:Router,private api:BackendAPIService,private activatedRoute:ActivatedRoute,private fb:FormBuilder){ }
  item: any = {};
  
ngOnInit(): void{
  const id=this.activatedRoute.snapshot.paramMap.get('id')
  this.api.getOneItem(id).subscribe((res:any)=>{
    this.item=res.data
    console.log(this.item)
    this.notesForm=this.fb.group({
      "Name":res.data.Name,
      "Designation":res.data.Designation,
      "Location":res.data.Location,
      "Salary":res.data.Salary

    })
  })

}

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
notesForm= new FormGroup({
  "Name":new FormControl(this.item.Name),
  "Designation":new FormControl(this.item.Designation),
  "Location":new FormControl(this.item.Location),
  "Salary":new FormControl(this.item.Salary)
})

 onSubmit(){
  console.log(this.notesForm.value)
  this.api.Adddetails(this.notesForm.value).subscribe(data=>console.log(data))
 }

}
