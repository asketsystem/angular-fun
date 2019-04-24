import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { path: 'about', component: AboutComponent},
  { path: 'todos', loadChildren: './todos/todos.module#TodosModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
