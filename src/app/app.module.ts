import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesComponent } from './employees/employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from './employees.service';


@NgModule({
  declarations: [
    AppComponent,
    BlogPostTileComponent,
    BlogPostListComponent,
    TruncatePipe,
    PaginatorComponent,
    HomeComponentComponent,
    PageNotFoundComponent,
    EmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule
    
  ],
  providers: [
    TruncatePipe,
    EmployeesService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
