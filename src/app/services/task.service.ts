import { Category } from "../models/CategoryModel";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import { Project } from "../models/ProjectModel";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Task } from "../models/TaskModel";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class TaskService
{
    readonly ALL_USERSTORIES_JSON = 'http://localhost:8080/api/userstories/read';
    readonly INSERT_CATEGORY = 'http://localhost:8080/api/userstories/create/';
    userStoryToModify : Task;
    private subject = new Subject<any>();
    
    constructor(private auth: AuthService, private http: HttpClient, private router: Router, private httpN: Http, private snackBar: MatSnackBar) {}
    
    
    newEvent(userStory: Task){
        this.subject.next(userStory);
    }
    get events$ (){
        return this.subject.asObservable();
    }
    
    
    public insertNewUserStory(task: Task): void
    {
        let headers = this.auth.createAuthHttpHeader();
        this.http.post(`http://localhost:8080/api/userstories/create/`, task,{headers: headers}).subscribe
        (
            data =>
            {
                if(data == true){
                    this.snackBar.open('Taak succesvol toegevoegd.', '', {duration:1000});
                }
                else{this.snackBar.open('Er iets fout gegaan in de server.', '', {duration:1000});}
            }, error=>{
                this.snackBar.open('Aanmaken taak mislukt.', '',{duration: 1000});
            })
    }
    public getAllCategories()
    {
        let headers = this.auth.createAuthHttpHeader();
        return this.http.get<Category[]>(`http://localhost:8080/api/categories/read/`,{headers: headers});
    }

    public getAllProjects()
    {
        let projects: Project[] = [];
        let headers = this.auth.createAuthHeader();
        this.httpN.get(`http://localhost:8080/api/projects/read/`,{headers: headers} ).subscribe(
            (res: Response) => {
            for(let project of res.json())
            {
                let projectContainer = new Project(
                    project.projectId, 
                    project.projectName, project.projectDescription,
                    project.projectIsDeleted, project.projectCustomerFk);
                projects.push(projectContainer);
            }
          })
          return projects;
    }

    getAllUserStories(): Observable<Task[]> {
        const headers = this.auth.createAuthHttpHeader();
      return this.http.get<Category[]>(this.ALL_USERSTORIES_JSON, {headers: headers});
    }


    public setUserStoryToModify(userStory: Task) {
        this.userStoryToModify = userStory;
        this.router.navigate(['modify-category']);
      }

      public removeUserStory(sp: Task) {
        const data = {
            userStoryId: sp.userStoryId,
            userStoryName: sp.userStoryName,
            userStoryDescription: sp.userStoryDescription,
            userStoryIsDeleted: sp.userStoryIsDeleted,
            isCurrent: sp.isCurrent,
            projectName: sp.projectName,
            projectId: sp.projectId,
            categoryName: sp.categoryName,
            categoryId: sp.categoryId
        };
        const headers = this.auth.createAuthHttpHeader();
        this.http.post(`http://localhost:8080/api/userstories/delete/`, data,{headers: headers}).subscribe
        (
            resp => {
                if(resp == true){
                    this.snackBar.open('Taak succesvol verwijderd.', '', {duration:1000});
                }
                else{this.snackBar.open('Er iets fout gegaan in de server.', '', {duration:1000});}
            }, error=>{
                this.snackBar.open('Verwijderen taak mislukt.', '',{duration: 1000});
            })
      }

      public updateUserStory(userStory: Task) {
        const data = {
            userStoryId: userStory.userStoryId,
            userStoryName: userStory.userStoryName,
            userStoryDescription: userStory.userStoryDescription,
            userStoryIsDeleted: userStory.userStoryIsDeleted,
            isCurrent: userStory.isCurrent,
            projectName: userStory.projectName,
            projectId: userStory.projectId,
            categoryName: userStory.categoryName,
            categoryId: userStory.categoryId
        };
        const headers = this.auth.createAuthHttpHeader();
        this.http.put(`http://localhost:8080/api/userstories/update/`, data, {headers: headers}).subscribe
        (
            resp => {
                if(resp == true){
                    this.snackBar.open('Category succesvol gewijzigd.', '', {duration:1000});
                }
                else{this.snackBar.open('Er iets fout gegaan in de server.', '', {duration:1000});}
            }, error=>{
                this.snackBar.open('Wijzigen taak mislukt.', '',{duration: 1000});
            })
      }
      getCategoriesProject(projectId: number){
        const headers = this.auth.createAuthHttpHeader();
      return this.http.get<Category[]>(`http://localhost:8080/api/userstories/getCategoriesByProject?pId=${projectId}`, {headers: headers});
    }

    getTasksCategory(categoryId: number){
        const headers = this.auth.createAuthHttpHeader();
      return this.http.get<Task[]>(`http://localhost:8080/api/userstories/getTasksByCategory?catId=${categoryId}`, {headers: headers});
    }
      

}


