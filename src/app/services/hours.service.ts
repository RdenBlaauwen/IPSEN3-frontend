import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import { Http, Response, Headers } from "@angular/http";
import { Router } from "@angular/router";

@Injectable()
export class HoursService {

  constructor(private auth: AuthService, private router: Router, private http: Http){
    
  }

}
