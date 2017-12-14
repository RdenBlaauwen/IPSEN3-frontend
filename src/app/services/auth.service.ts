import { Injectable } from "@angular/core";
import { Headers } from "@angular/http";

@Injectable()
export class AuthService
{
    password: string = null;
    emailAddress: string = null;
    constructor(){}
    public createAuthHeader(email: string, password: string): Headers
    {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + email + ':' + password);
        return headers;
    }

    public setAuth(email: string, password: string)
    {
        this.emailAddress = email;
        this.password = password;
        
    }
    public isAuthorized()
    {
        return(this.emailAddress != null && this.password != null);
    }
    public storeAuthorization(email: string, password: string, local: boolean)
    {
        
        let authorization = 
        {
          email,
          password
        }
        let auth = JSON.stringify(authorization);
        let storage = local ? localStorage : sessionStorage;
        storage.setItem('authorization', auth);
    }
    public getAuthorization():void
    {
        let authorizationString = sessionStorage.getItem('authorization');
        console.log(authorizationString);
        if(authorizationString == null)
        {
            authorizationString = localStorage.getItem('authorization');
        }
        if(authorizationString !== null)
        {
            let authorization = JSON.parse(authorizationString);
            this.emailAddress = authorization['email'];
            this.password = authorization['password'];
        }
    }
}