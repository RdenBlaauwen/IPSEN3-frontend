import { Component, OnInit,Injectable } from '@angular/core';
import{ Http, Response } from '@angular/http';
@Injectable()
export class ProjectService {
    public http:Http;
    public static PATH:string = 'api/projects/'    

    constructor(http:Http) {
        this.http=http;
    }

    getHalls() {
        this.http.get(ProjectService.PATH).subscribe(
            
            (res: Response) => {
            const employee = res.json();
          })
    }
}