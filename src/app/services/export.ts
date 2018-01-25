import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";

@Injectable()
export class ExportService {

    projectsList: Object[] = [];
    CSV;
    constructor(private http: Http) { 
      this.getCSVInfo();
  
    }
  
    getCSVInfo(){
      this.http.get('http://localhost:8080/api/export/read').subscribe(
        (response: Response) =>{
          this.JSONToCSV(response.text(), "Mijn export", true);
      });    
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