import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http/';
import { Export } from './export';

@Component({
  selector: 'app-export', 
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
  
  projectsList: Object[] = [];
  CSV;
  constructor(private http: Http) { 
    this.getCSVInfo();

  }

  getCSVInfo(){
    this.http.get('/api/export/read').subscribe(
      (response: Response) =>{
        this.JSONToCSV(response.text(), "Mijn export", true);
    });    
  }


  createModels()
  {
    let data;
    let exportModels: Export[]=[];
    this.http.get('/api/export/read').subscribe(
      (response: Response) =>{
        for (let exports1 of response.json()){
          let projectTemp = new Export();
          projectTemp.projectDate = exports1.date;
          projectTemp.projectStartTime = exports1.startTime;
          projectTemp.projectEndTime = exports1.endTime;
          projectTemp.projectName = exports1.projectName;
          projectTemp.projectDescription = exports1.description;
          projectTemp.projectHours = exports1.projectHours;

          exportModels.push(projectTemp);
        }
      
    });
      let json = JSON.stringify(exportModels)
      return exportModels;
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
  ngOnInit() {
  }

}