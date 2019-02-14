import { Component, OnInit, Input ,EventEmitter, Output} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EmlpoyeeModel } from '../emlpoyee-model';
import { EmployeesService } from '../employees.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { ActivatedRoute, Router } from '@angular/router';

 

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  show=true;
  status:any;
  FormDetails: FormGroup;

  /* FormDetails=new FormGroup({
    EmployeeId:new FormControl(),
    FirstName:new FormControl(),
    LastName:new FormControl(),
    Email:new FormControl(),
    MobileNo:new FormControl(),
    RoleId:new FormControl()

  }); */
  postData:EmlpoyeeModel;
  Record:EmlpoyeeModel;
  @Output() Showlist=new EventEmitter<boolean>();
  @Input() SelectedData:any;
  message=null;
  constructor(private _employeeService:EmployeesService,
              private fb: FormBuilder, private _router: Router,
              private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.formValidation();
    console.log('SelectedData',this.SelectedData);
    if(this.SelectedData){
      this.ResetForm(this.SelectedData);
    }
    
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.FormDetails.value);
    this.postData=this.FormDetails.value
    console.log(this.postData);
    if(this.postData.EmployeeId)
    {

      this._employeeService.updateEmployee(this.postData,this.SelectedData.EmployeeId)
      .subscribe(success=>{this.status=success.status
      console.log(this.status);
      
      });
      this.message="Record updated Successfully";
    }
    else{
      this._employeeService.createEmployee(this.postData)
      .subscribe(result=>{this.Record=result
      console.log(result);
      });
      this.message="Record saved Successfully";
    }
    this.FormDetails.reset();
  }

  ShowList(show){
    console.log(show);
      this.Showlist.emit(false)
  }
  ValueChange(){
    this.Showlist.emit(false);
    /* this._router.navigate(['/Employee'],{relativeTo:this.route}); */

    
  }
  ResetForm(resetdata:FormGroup){
    this.FormDetails.reset(
     {
      EmployeeId:this.SelectedData.EmployeeId,
       FirstName:this.SelectedData.FirstName,
       LastName:this.SelectedData.LastName,
       Email:this.SelectedData.Email,
       MobileNo:this.SelectedData.MobileNo,
       RoleId:this.SelectedData.RoleId
     }
   )
  }


  formValidation(){
    this.FormDetails=this.fb.group({
      EmployeeId:[''],
      FirstName:['',[Validators.required]],
      LastName:['',[Validators.required]],
      Email:['',[Validators.required]],
      MobileNo:['',[Validators.required]],
      RoleId:['']

    })
    
  }
}
