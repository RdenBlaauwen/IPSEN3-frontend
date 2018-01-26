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
  
    getCSVInfo(){
      let headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
      let result = this.http.get<CSVModel>('http://localhost:8080/api/export', {headers: headers});
      result.toPromise().then(csv => {return csv}).then((data)=>{
        console.log("EXPORT RESULT!: "+data.content);
        this.JSONToCSV(data.content, "Mijn export", true);
      }, (error) => console.log(error.SessionNotCreatedError));
    }
  

    public JSONToCSV(CSV, ReportTitle, ShowLabel) { 
       
      let fileName = "WebEdu_";
      fileName += ReportTitle.replace(/ /g,"_");   
      
      let uri = 'data:text/csv;charset=utf-8,' + CSV;
      
      let link = document.createElement("a");    
      link.href = uri;
      
      link.download = fileName + ".csv";
    
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
          
      }



}