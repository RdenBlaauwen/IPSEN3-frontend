import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { EntryModel } from '../models/EntryModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WeekModel } from '../models/WeekModel';
import { HoursComponent } from '../hours/hours.component';


@Injectable()
export class HoursService {
  readonly ALL_ENTRIES_JSON = 'http://localhost:8080/api/entries';
  constructor(private auth: AuthService, private router: Router, private http: HttpClient) {
  }

  // retrieveData(){
  //   let authorization = this.auth.getAuthorization();
  //   let headers = this.auth.createAuthHeader(authorization['email'], authorization['password']);
  //   this.http.get(`http://localhost:8080/api/entries/read`, {headers: headers}).subscribe(
  //   (res: Response) => {
  //     console.log(res.json());
  //   });
  // }

  public getAllEntries(week: string): Promise<WeekModel> {
    let headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
    let params = new URLSearchParams();
    params.append('startdate', week);
    let result = this.http.get<WeekModel>(this.ALL_ENTRIES_JSON + '?startdate='+week, {headers: headers});
    console.log("service: result "+result);
    return result.toPromise().then(weeks => {return weeks});
  }

  // public createEntry(description: string, date: Date, projectId: number, sprintId: number, 
  //                     userStoryId: number, employeeId: number): void {
    
  // }

  public createEntry(entry: EntryModel): Promise<any> {
    let headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
    // this.http.post(this.ALL_ENTRIES_JSON, entry, {headers: headers})
    // .subscribe(response => {
    //   hoursComponent.updateData();
    //   console.log(response);
    //   return response.;
    // });
    let result=this.http.post(this.ALL_ENTRIES_JSON, entry, {headers: headers});
    return result.toPromise().then(res => {return res});
  }
}
