import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { EntryModel } from '../models/EntryModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WeekModel } from '../models/WeekModel';
import { Subject } from 'rxjs/Subject';
import { error } from 'util';

@Injectable()
export class EntryService {
  readonly ALL_ENTRIES_JSON = 'http://localhost:8080/api/entries';
  private subject = new Subject<any>();
  public selectedEntry: EntryModel;
  constructor(private auth: AuthService, private router: Router, private http: HttpClient) {}
  newEvent(entry: EntryModel){
    console.log('newEvent: '+entry.entryDescription);
    this.subject.next(entry);
    }
    get events$ (){
        return this.subject.asObservable();
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
    let result = this.http.get<WeekModel>(this.ALL_ENTRIES_JSON + '?startdate='+week, {headers: headers});
    console.log("service: result "+result);
    return result.toPromise().then(weeks => {return weeks});
  }

  public getAllEntriesQueued(): Promise<EntryModel[]> {
    let headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
    return this.http.get<EntryModel[]>(this.ALL_ENTRIES_JSON + '/queued', {headers: headers}).toPromise()
    .then(res => res)
    .then(entries => entries.map(entry => {
      return new EntryModel(
        entry.entryId,
        entry.entryDescription,
        entry.entryStatus,
        entry.entryDate,
        entry.entryStartTime,
        entry.entryEndTime,
        entry.entryIsLocked,
        entry.employeeFk,
        entry.entryProjectFk,
        entry.entryProjectName,
        entry.entrySprintFk,
        entry.entrySprintName,
        entry.entryUserstoryFk,
        entry.entryUserstoryName,
        entry.isDeleted,
        entry.isCurrent,
        entry.entryEmployeeName);
    }));
    // return result.toPromise().then(weeks => {return weeks});
  }

  // public createEntry(description: string, date: Date, projectId: number, sprintId: number, 
  //                     userStoryId: number, employeeId: number): void {
    
  // }

  public createEntry(entry: EntryModel): Promise<any>{
    let headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
    let result = this.http.post(this.ALL_ENTRIES_JSON, entry, {headers: headers});
    return result.toPromise().then(res => {return res});
  }
  public updateEntry(entry: EntryModel): Promise<any> {
    let headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
    let result=this.http.put(this.ALL_ENTRIES_JSON, entry, {headers: headers});
    return result.toPromise().then(res => {return res});
  }
  public deleteEntry(entry: EntryModel): Promise<any> {
    let headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
    let result=this.http.delete(this.ALL_ENTRIES_JSON+'?entryid='+entry.entryId, {headers: headers});
    return result.toPromise().then(res => {return res});
  }

  public getAllEntriesBorisTest(){
    return this.http.get<EntryModel[]>('http://localhost:8080/api/entries/boris');
  }

  /*public approveEntry(entryId: number){
    const headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
    this.http.put(`http://localhost:8080/api/entries/approve?entryId=${entryId}`,{headers:headers}).subscribe(res=>{
      alert("gelukt")
    }, error=>{
      alert("Niet gelukt");
  });
  }

  public rejectEntry(entryId: number){
    const headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
    this.http.put(`http://localhost:8080/api/entries/reject?entryId=${entryId}`,{headers:headers}).subscribe(res=>{
      alert("gelukt")
    },error=>{
      alert("niet gelukt")
    });
  }*/

  public approveEntries(entryIds: number[]): Promise<any>{
    const headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
    let result=this.http.put(this.ALL_ENTRIES_JSON+'/approve', entryIds, {headers: headers});
    return result.toPromise().then(res => {return res});
  }

  public rejectEntries(entryIds: number[]): Promise<any>{
    const headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
    let result=this.http.put(this.ALL_ENTRIES_JSON+'/reject', entryIds, {headers: headers});
    return result.toPromise().then(res => {return res});
  }
}
