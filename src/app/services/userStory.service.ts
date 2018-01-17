import { Category } from "../models/CategoryModel";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import { UserStory } from "../models/UserStoryModel"
import { Project } from "../models/ProjectModel";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserStoryService
{
    readonly ALL_USERSTORIES_JSON = 'http://localhost:8080/api/userstories/read';
    readonly INSERT_CATEGORY = 'http://localhost:8080/api/userstories/create/';
    userStoryToModify : UserStory;
    private subject = new Subject<any>();
    
    constructor(private auth: AuthService, private http: HttpClient, private router: Router, private httpN: Http) {}
    
    
    newEvent(userStory: UserStory){
        this.subject.next(userStory);
    }
    get events$ (){
        return this.subject.asObservable();
    }
    
    
    public insertNewUserStory(sp: UserStory): void
    {
        let data =
        {
            userStoryID: sp.userStoryID,
            userStoryName: sp.userStoryName,
            userStoryDescription: sp.userStoryDescription,
            userStoryIsDeleted: sp.userStoryIsDeleted,
            isCurrent: sp.isCurrent,
            projectName: sp.projectName,
            categoryName: sp.categoryName

        };
        let headers = this.auth.createAuthHeader(
            this.auth.emailAddress, this.auth.password);
        this.http.post(`'http://localhost:8080/api/userstories/create/`, data,).subscribe
        (
            data =>
            {
                alert('Category succesvol aangemaakt');
            },
            error =>
            {
                alert('Aanmaken category mislukt');
            }
        );
    }
    public getAllCategories()
    {
        let categories: Category[] = [];
        let headers = this.auth.createAuthHeader(
            this.auth.emailAddress, this.auth.password);
        this.httpN.get(`http://localhost:8080/api/categories/read/`,{headers: headers} ).subscribe(
            (res: Response) => {
              console.log(res.json());
            for(let category of res.json())
            {
                let categoryContainer = new Category(
                    category.categoryId, 
                    category.categoryIsDeleted, 
                    category.categoryName,
                    category.categoryStartDate, 
                    category.categoryEndDate,
                    category.categoryDescription,
                    category.projectFK,
                    category.projectName,
                    category.isCurrent);
                 categories.push(categoryContainer);
            }
          })
          return categories;
    }

    public getAllProjects()
    {
        let projects: Project[] = [];
        let headers = this.auth.createAuthHeader(
            this.auth.emailAddress, this.auth.password);
        this.httpN.get(`http://localhost:8080/api/projects/read/`,{headers: headers} ).subscribe(
            (res: Response) => {
              console.log(res.json());
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

    getAllUserStories(): Observable<UserStory[]> {
        const headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
      return this.http.get<Category[]>(this.ALL_USERSTORIES_JSON, {headers: headers});
    }


    public setUserStoryToModify(userStory: UserStory) {
        this.userStoryToModify = userStory;
        this.router.navigate(['modify-category']);
      }

      public removeUserStory(sp: UserStory) {
        const data = {
            userStoryID: sp.userStoryID,
            userStoryName: sp.userStoryName,
            userStoryDescription: sp.userStoryDescription,
            userStoryIsDeleted: sp.userStoryIsDeleted,
            isCurrent: sp.isCurrent,
            projectName: sp.projectName,
            categoryName: sp.categoryName
        };
        const headers = this.auth.createAuthHeader(
            this.auth.emailAddress, this.auth.password);
        this.httpN.post(`http://localhost:8080/api/categories/delete/`, data,{headers: headers}).subscribe
        (
            resp => {
                alert('Taak succesvol verwijderd');
            },
            error => {
                alert('Verwijderen taak mislukt');
            }
        );
      }

      public updateUserStory(userStory: UserStory) {
        const data = {
            userStoryID: userStory.userStoryID,
            userStoryName: userStory.userStoryName,
            userStoryDescription: userStory.userStoryDescription,
            userStoryIsDeleted: userStory.userStoryIsDeleted,
            isCurrent: userStory.isCurrent,
            projectName: userStory.projectName,
            categoryName: userStory.categoryName
        };
        const headers = this.auth.createAuthHeader(
            this.auth.emailAddress, this.auth.password);
        this.httpN.put(`http://localhost:8080/api/userstories/update/`, data, {headers: headers}).subscribe
        (
            resp => {
                if(resp){
                    alert('Taak succesvol gewijzigd');
                }else{
                    alert('Er is iets fout gegaan');
                }            
            },
            error => {
                alert('Taak update mislukt');
            }
        );
      }

}


