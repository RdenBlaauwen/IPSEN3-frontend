import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Http, Response, Headers } from "@angular/http";
import { Router } from "@angular/router";


@Injectable()
export class EmployeeService
{
  naam : string = null;
    constructor(private auth: AuthService, private router: Router, private http: Http)
    {

    }
    private goHome()
    {
        this.router.navigate(['home']);
    }
    public login(email: string, password: string)
    {
        let headers = this.auth.createAuthHeader(email, password);
         this.http.get(`http://localhost:8080/api/login/`,{headers:headers}).subscribe(
         (res: Response) => {
           console.log(res.json());
          
         for(let employee of res.json())
         {
           if(employee.employeeEmail == email && employee.employeePassword == password)
           {
             let authorization = 
             {
               email,
               password,
               name: employee.employeeFirstname
             }
             this.goHome();
             let auth = JSON.stringify(authorization);
             let storage = false ? localStorage : sessionStorage;
             storage.setItem('authorization', auth);
             
           }
         }
       })
       
    }
}