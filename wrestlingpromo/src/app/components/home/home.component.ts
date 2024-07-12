import { Users } from './../../interface/users';
import { UsersService } from './../../service/users.service';
import { TodoService } from '../../service/todo.service';
import { Todo } from './../../interface/todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  Homelist: Todo[] = [];
  users: Users[] = [];

  constructor(
    private todoService: TodoService,
    private userService: UsersService
  ) {}
  ngOnInit(): void {
    this.Homelist = this.todoService.getAll();
    this.users = this.todoService.getUsers();
  }
  getHome() {
    this.Homelist = this.todoService.getAll();
  }

  getTodoUsers(todo: Todo): Users[] {
    return this.users.filter((user) => user.id === todo.userId);
  }

  greenYellow(todo: Todo): void {
    todo.completed = !todo.completed;
  }
}
