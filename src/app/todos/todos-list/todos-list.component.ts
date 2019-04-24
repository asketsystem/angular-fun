import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  todos: Todo[];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getData().subscribe(data => {
      this.todos = data;
      console.log(this.todos);
    });

  }

}
