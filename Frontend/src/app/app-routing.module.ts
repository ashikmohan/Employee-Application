import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EditComponent } from './edit/edit.component';
import { EditItemComponent } from './edit-item/edit-item.component';


const routes: Routes = [{path:'',component:LoginComponent},
{path:'dashboard/admin',component:DashboardadminComponent},
{path:'dashboard/user',component:DashboarduserComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'edit',component:EditComponent},
{path:'editItem',component:EditItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
