import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute  } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesComponent } from './employees/employees.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch: 'full' }, 
  {
    path:'home',component:HomeComponentComponent,outlet:'parent'
   
  },
  {
    path:'blog',component:BlogPostListComponent,outlet:'parent'
  },
  {
    path:'Employee',
    component:EmployeesComponent,
    
    children:[
      {
        path:'Create',
        component:CreateEmployeeComponent,outlet:'child'
      },
      {
        path:'Update',
        component:CreateEmployeeComponent,outlet:'child'
      }
    ],
    outlet:'parent'
    
  },
  
  
  
  
  {
    path:'**',component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
