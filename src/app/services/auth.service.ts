import { Injectable } from "@angular/core";

@Injectable()
export class AuthService
{
    password: string;
    emailAddress: string;
    constructor(){}

    public setAuth(email: string, password: string)
    {
        this.emailAddress = email;
        this.password = password;
        
    }

    public getAuthorization()
    {
        let authorizationString = sessionStorage.getItem('authorization');
        console.log(authorizationString);

        if(authorizationString === null)
        {
            authorizationString = localStorage.getItem('authorization');
        }
        if(authorizationString !== null)
        {
            let authorization = JSON.parse(authorizationString);
            this.emailAddress = authorization['emailAddress'];
            this.password = authorization['password'];
        }
        return authorizationString;
    }
}