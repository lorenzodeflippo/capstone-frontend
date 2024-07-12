import { Component } from '@angular/core';
import { Todo } from '../../interface/todo';
import { TodoService } from '../../service/todo.service';
import { UsersService } from '../../service/users.service';
import { Users } from '../../interface/users';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  Homelist: Todo[] = [];
  users: Users[] = [];

  constructor(
    private todoService: TodoService,
    private userService: UsersService
  ) {}
  ngOnInit(): void {
    this.Homelist = this.todoService.getAll();
    this.users = this.todoService.getUsers();
    this.meotodFalse();
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

  meotodFalse() {
    this.Homelist = this.todoService.getAll().filter((a) => !a.completed);
  }
}
