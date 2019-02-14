import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { Http,Response } from '@angular/http';
import{ EmlpoyeeModel} from './emlpoyee-model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _http: Http) { }

 
 /*  public getEmployees(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this._http.get('/src/assets/EmployeeData.json')
        .subscribe((results: any) => {
          observer.next(data);
        }, (error) => observer.error(error),
          () => observer.complete());
    });
  }
  */

  //Call to GET api
 getEmployees():Observable<any>{
  return this._http.get('http://localhost:50123/api/Employees/GetAllEmployees')
	        .map(this.extractData);
         
 }

 //call to POST api
 createEmployee(postData: EmlpoyeeModel ):Observable<any>{
      return this._http.post("http://localhost:50123/api/Employees/CreateEmployee",postData)
      .map(this.extractData);

 }


 //call to PUT api
 updateEmployee(postData:EmlpoyeeModel, id: number):Observable<any>{
   
   return this._http.put("http://localhost:50123/api/Employees/UpdateEmployee/"+postData.EmployeeId,postData)
   .map(this.extractData);
 }

 //Call to DELETE api
 DeleteEmployee(id:number):Observable<any>{
  return this._http.delete("http://localhost:50123/api/Employees/DeletetEmployee/" + id)
  .map(this.extractData);
 }
 
 private extractData(res: Response) {
	let body = res.json();
        return body;
    }

     

  
}
