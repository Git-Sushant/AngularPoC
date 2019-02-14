import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Observable } from 'rxjs/Observable';
import { EmlpoyeeModel } from '../emlpoyee-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  empDetails:any;
  show=true;
  status:any;
  childdData:any;
  /* @Output() SelectedData=new EventEmitter<any>(); */
  constructor(private _employeeService: EmployeesService,private _router: Router) {

    console.log('show',this.show);
   }

  ngOnInit() {
    
      this.getEmployeeDetails();
      console.log(this.empDetails);
      
  }


  getEmployeeDetails() {
    let data:any;
     return this._employeeService.getEmployees()
    .subscribe(employeeData => 
      {
        console.log(employeeData);
        this.empDetails=employeeData;
        console.log( this.empDetails) ;
      });
   
  }

  Toggle(value){

    this.show=value;
   /*  this.getEmployeeDetails(); */
  }

  OnSelect(selectedItem){
    this.Toggle(false);

    console.log(selectedItem);
    this.childdData=selectedItem;
     }

     OnDelete(id:number){
        this._employeeService.DeleteEmployee(id).
        subscribe(success=>{
          this.status=success.status;
          this.getEmployeeDetails();
        }
        );
        
     }

}
