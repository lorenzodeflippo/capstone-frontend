import { Component } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { UsersService } from '../../service/users.service';
import { Todo } from '../../interface/todo';
import { Users } from '../../interface/users';

@Component({
  selector: 'app-todoall',
  templateUrl: './todoall.component.html',
  styleUrl: './todoall.component.scss',
})
export class TodoallComponent {
  Homelist: Todo[] = [];
  users: Users[] = [];

  constructor(
    private todoService: TodoService,
    private userService: UsersService
  ) {}
  ngOnInit(): void {
    this.Homelist = this.todoService.getAll();
    this.users = this.todoService.getUsers();
    this.metodGreen();
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
  metodGreen() {
    this.Homelist = this.todoService.getAll().filter((a) => a.completed);
  }
}
