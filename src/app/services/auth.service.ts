import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
@Injectable()
export class AuthService {
    password: string = null;
    emailAddress: string = null;
    name: string = null;
    constructor() {}
    public createAuthHeader(email: string, password: string) {
        const loginEncoded =  btoa(email + ':' + password);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + loginEncoded);
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
            this.name = authorization['name'];
        }
    }
    public getEmployeeName() {
        return this.name;
    }
}
