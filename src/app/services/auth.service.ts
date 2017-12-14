import { Injectable } from "@angular/core";
import { Headers } from "@angular/http";

@Injectable()
export class AuthService
{
    password: string = null;
    emailAddress: string = null;
    constructor(){
        this.getAuthorization();
    }
    public createAuthHeader(): Headers
    {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.emailAddress + ':' + this.password);
        return headers;
    }

    public setAuth(email: string, password: string)
    {
        this.emailAddress = email;
        this.password = password;
        
    }
    public isAuthorized()
    {
        console.log(this.emailAddress != null && this.password != null);
        return this.emailAddress != null && this.password != null; 
        //console.log(this.emailAddress);
    }
    public storeAuthorization(local: boolean)
    {
        
        let authorization =
        {
            emailAddress: this.emailAddress,
            password: this.password
        };

        let authorizationString = JSON.stringify(authorization);
        let storage = local ? localStorage : sessionStorage;

        storage.setItem('authorization', authorizationString);
        console.log(authorizationString);
    }
    public getAuthorization():void
    {
        let authorizationString = sessionStorage.getItem('authorization');
        console.log(authorizationString);
        if(authorizationString == null)
        {
            authorizationString = localStorage.getItem('authorization');
        }
        if(authorizationString != null)
        {
            let authorization = JSON.parse(authorizationString);
            this.emailAddress = authorization['email'];
            this.password = authorization['password'];
        }
    }
}