import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import {CSVModel} from '../models/CSVModel';

@Injectable()
export class ExportService {

    projectsList: Object[] = [];
    CSV;
    constructor(private auth: AuthService, private http: HttpClient) { 
    }
  
    getCSVInfo(): Promise<CSVModel>{
      let headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
      let result = this.http.get<CSVModel>('http://localhost:8080/api/export', {headers: headers});
      return result.toPromise().then(csv => {return csv});
    }
}