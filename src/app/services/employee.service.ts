import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Http, Response, Headers } from "@angular/http/";
import { Router } from "@angular/router/";
import { BASE_PAGES } from "../page-list";


@Injectable()
export class EmployeeService
{
  naam : string;
    constructor(private auth: AuthService, private router: Router, private http: Http)
    {

    }
    public login(email: string, password: string)
    {
        let activeEmployee = "";
        let loginEncoded =  btoa(email+":"+password);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + loginEncoded);
       //  const options = new RequestOptions();
         this.http.get(`/api/login/`,{headers:headers}).subscribe(
         (res: Response) => {
           console.log(res.json());
          
         for(let employee of res.json())
         {
           if(employee.employeeEmail == email && employee.employeePassword == password)
           {
             let authorization = 
             {
               email,
               password
             }
             let auth = JSON.stringify(authorization);
             let storage = false ? localStorage : sessionStorage;
             storage.setItem('authorization', auth);
             this.naam= employee.employeeFirstname;
             this.router.navigate([BASE_PAGES[1].name]);
           }
         }
       }
       )
       return "Niet gelukt";
    }
}