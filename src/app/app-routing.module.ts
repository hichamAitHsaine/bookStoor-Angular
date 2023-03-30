import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { HomeComponent } from './home/home.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'add-book',
    component: AddBookComponent
  },
  {
    path:'update-book/:id',
    component: UpdateBookComponent
  },
  {
    path:'view-book/:id',
    component: ViewBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
