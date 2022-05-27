import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  {
    path: 'category',component:CategoryComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
