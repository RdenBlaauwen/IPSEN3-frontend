import { SprintModel } from "../models/SprintModel";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Http, Response, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { Project } from "../models/ProjectModel";
@Injectable()
export class SprintService
{
    constructor(private http: Http, private auth: AuthService){}
    public postSprintModel(sp: SprintModel): void
    {
        let data =
        {
            sprintName: sp.sprintName,
            sprintStartDate: sp.sprintStartDate,
            sprintEndDate: sp.sprintEndDate,
            sprintDescription: sp.sprintDescription,
            projectFK: sp.projectFK

        };
        let headers = this.auth.createAuthHeader(
            this.auth.emailAddress, this.auth.password);
        this.http.post(`/api/sprints/create/`, data,{headers: headers}).subscribe
        (
            data =>
            {
                alert('Sprint succesvol aangemaakt');
            },
            error =>
            {
                alert('Aanmaken Sprint mislukt');
            }
        );
    }
    public getAllProjects()
    {
        let projects: Project[] = [];
        let headers = this.auth.createAuthHeader(
            this.auth.emailAddress, this.auth.password);
        this.http.get(`/api/projects/read/`,{headers: headers} ).subscribe(
            (res: Response) => {
              console.log(res.json());
            for(let project of res.json())
            {
                let projectContainer = new Project(project.projectId, 
                    project.projectName, project.projectDescription,
                    project.projectIsDeleted, project.projectCustomerFk);
                projects.push(projectContainer);
            }
          })
          return projects;
    }
}