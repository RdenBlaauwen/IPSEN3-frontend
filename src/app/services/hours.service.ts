import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { EntryModel } from '../models/EntryModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  getAllEntries(): Observable<EntryModel[]> {
    let headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
    return this.http.get<EntryModel[]>(this.ALL_ENTRIES_JSON, {headers: headers});
  }
}
