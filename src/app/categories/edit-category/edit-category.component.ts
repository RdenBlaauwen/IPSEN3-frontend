import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/CategoryModel';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  selectedCategory: Category = new Category();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.events$.forEach(category =>{
      this.selectedCategory = category;
    })
  }

  modifyCategory(){
    this.categoryService.modifyCategory(this.selectedCategory);
  }

}
