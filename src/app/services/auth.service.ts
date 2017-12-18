import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Employee } from "../models/Employee";
import { HttpHeaders } from "@angular/common/http";
@Injectable()
export class AuthService {
    password: string = null;
    emailAddress: string = null;
    loggedUserObject: Employee = null;
    constructor() {
        this.getAuthorization();
        console.log("Dit is het email na verversen pagina: "+this.emailAddress);
    }
    public createAuthHeader(email: string, password: string) {
        const loginEncoded =  btoa(email + ':' + password);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + loginEncoded);
        return headers;
    }

    public createAuthHttpHeader(email: string, password: string) {
        const loginEncoded =  btoa(email + ':' + password);
        let headers = new HttpHeaders();
        if (this.isAuthorized())
        {
            headers = headers.set('Authorization', 'Basic ' + loginEncoded);
        }
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
        console.log(authorizationString);
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
