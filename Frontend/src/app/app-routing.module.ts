import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { CreateemployeesComponent } from './createemployees/createemployees.component';
import { EmployeesComponent } from './employees/employees.component';


const routes: Routes = [{path:'',component:LoginComponent},
{path:'createemployees',component:CreateemployeesComponent},{path:'employees',component:EmployeesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
