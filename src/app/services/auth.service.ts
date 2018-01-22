import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Employee } from "../models/Employee";
import { HttpHeaders } from "@angular/common/http";
@Injectable()
export class AuthService {
    password: string = null;
    emailAddress: string = null;
    loggedUserObject: Employee = new Employee();
    constructor() {
        this.getAuthorization();
    }

    public isAdmin(){
        return this.isAuthorized() && this.loggedUserObject.employeeRole === 'administration';
    }

    public isManager(){
        return this.isAuthorized() && this.loggedUserObject.employeeRole === 'manager';
    }

    public createAuthHeader(emailSend?: string, passwordSend?: string) {
        let email = emailSend || this.emailAddress;
        let password = passwordSend || this.password;
        const loginEncoded =  btoa(email + ':' + password);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + loginEncoded);
        return headers;
    }

    public createAuthHttpHeader(emailSend?: string, passwordSend?: string) {
        let email = emailSend || this.emailAddress;
        let password = passwordSend || this.password;
        const loginEncoded =  btoa(email + ':' + password);
        let headers = new HttpHeaders().set('Authorization', 'Basic ' + loginEncoded);
        return headers;
    }

    public setAuth(email: string, password: string) {
        this.emailAddress = email;
        this.password = password;
    }
    public isAuthorized() {
        return(this.emailAddress != null && this.password != null);
    }
    public storeAuthorization(email: string, password: string, local: boolean) {
        const authorization = {
          email,
          password };
        const auth = JSON.stringify(authorization);
        const storage = local ? localStorage : sessionStorage;
        storage.setItem('authorization', auth);
    }
    public getAuthorization(): void {
        let authorizationString = sessionStorage.getItem('authorization');
        if (authorizationString == null) {
            authorizationString = localStorage.getItem('authorization');
        }
        if (authorizationString !== null) {
            const authorization = JSON.parse(authorizationString);
            this.emailAddress = authorization['email'];
            this.password = authorization['password'];
            this.loggedUserObject = authorization['loggedUserObject'];
        }
    }
    public getEmployeeModel() {
        return this.loggedUserObject;
    }
    public setNullAfterLogout()
    {
        this.emailAddress = null;
        this.password = null;
        this.loggedUserObject = null;
    }

}
