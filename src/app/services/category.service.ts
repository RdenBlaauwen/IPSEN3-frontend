import { Category } from "../models/CategoryModel";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import { Project } from "../models/ProjectModel";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { MatSnackBar } from "@angular/material";
import { error } from "util";
@Injectable()
export class CategoryService
{
    readonly ALL_CATEGORIES_JSON = 'http://localhost:8080/api/categories/read';
    readonly INSERT_CATEGORY = 'http://localhost:8080/api/categories/create/';
    categoryToModify : Category;
    private subject = new Subject<any>();

    constructor(private auth: AuthService, private http: HttpClient, private router: Router, private httpN: Http, private snackBar: MatSnackBar) {}

    newEvent(category: Category){
        this.subject.next(category);
    }
    get events$ (){
        return this.subject.asObservable();
    }

    public modifyCategory(category: Category){
        let headers = this.auth.createAuthHttpHeader(
            this.auth.emailAddress, this.auth.password);
        this.http.put(`http://localhost:8080/api/categories/update/`, category,{headers:headers}).subscribe(res => {
            this.snackBar.open('Category succesvol gewijzigd..', '', {duration:1000});
        }, error=>{
            this.snackBar.open('Wijzigen category mislukt.', '',{duration: 1000});
        })
    }

    public insertNewCategory(category: Category)
    {
        let headers = this.auth.createAuthHttpHeader(
            this.auth.emailAddress, this.auth.password);
        this.http.post(`http://localhost:8080/api/categories/create/`, category,{headers:headers}).subscribe(res => {
            this.snackBar.open('Category succesvol toegevoegd.', '', {duration:1000});
        }, error=>{
            this.snackBar.open('Aanmaken category mislukt.', '',{duration: 1000});
        })
    }
    public getAllProjects()
    {
        let projects: Project[] = [];
        let headers = this.auth.createAuthHeader(
            this.auth.emailAddress, this.auth.password);
        this.httpN.get(`http://localhost:8080/api/projects/read`,{headers: headers} ).subscribe(
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

    getAllCategories(): Observable<Category[]> {
        const headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
      return this.http.get<Category[]>(this.ALL_CATEGORIES_JSON, {headers: headers});
    }


    public setCategoryToModify(category: Category) {
        this.categoryToModify = category;
        this.router.navigate(['modify-category']);
      }

      public removeCategory(sp: Category) {
        const data = {
            categoryId : sp.categoryId,
            categoryIsDeleted : sp.categoryIsDeleted,
            categoryName : sp.categoryName,
            categoryStartDate : sp.categoryStartDate,
            categoryEndDate : sp.categoryEndDate,
            categoryDescription : sp.categoryDescription,
            projectFK : sp.projectFK,
            projectName : sp.projectName
        };
        const headers = this.auth.createAuthHeader(
            this.auth.emailAddress, this.auth.password);
        this.httpN.post(`http://localhost:8080/api/categories/delete/`, data,{headers: headers}).subscribe
        (
            resp => {
                alert('Project succesvol verwijderd');
            },
            error => {
                alert('Verwijderen Project mislukt');
            }
        );
      }
    

}


