import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/Model/API/category';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private service: CategoryService) {}

public Datas:Category[]=[{}];



  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.service.getCategory().subscribe((data:Category[])=>{this.Datas = data;console.log(this.Datas)})
  }


  async getSingleCategory(){
   await this.service.getSingleCategory(1).toPromise();
  }

}
