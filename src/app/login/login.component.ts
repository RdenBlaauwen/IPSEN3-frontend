import { Component, OnInit } from '@angular/core';
import{ Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  employees: string[];
  email: string;
  currentEmployee: string;
  constructor(private http: Http) {}
checkLogin(email: string, password: string)
{
  this.http.get("/api/login/").subscribe(
    
    (res: Response) => {
    this.employees = res.json();
    console.log(this.employees);
    this.email = email;
    for(let employee of res.json())
    {
      if(employee.email == email && employee.password == password)
      {
        this.currentEmployee = employee.userFirstName;
        break;
      }
      else
      {
        this.currentEmployee = null;
      }
    }
  }
  )
 }
 validUser()
{
}

}
