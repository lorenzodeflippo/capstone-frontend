import { Todo } from './../interface/todo';
import { UsersService } from './users.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  arrayTodo: Todo[] = [
    {
      id: 1,
      todo: 'ROMAN REIGNS',
      completed: true,
      userId: 1,
    },
    {
      id: 2,
      todo: 'THE ROCK',
      completed: false,
      userId: 2,
    },
    {
      id: 3,
      todo: 'STONE COLD STEVE AUSTIN',
      completed: false,
      userId: 3,
    },
    {
      id: 4,
      todo: 'THE UNDERTAKER',
      completed: false,
      userId: 4,
    },
    {
      id: 5,
      todo: 'JOHN CENA',
      completed: false,
      userId: 5,
    },
    {
      id: 6,
      todo: 'HULK HOGAN',
      completed: false,
      userId: 6,
    },
    {
      id: 7,
      todo: 'SETH ROLLINS',
      completed: false,
      userId: 7,
    },
    {
      id: 8,
      todo: 'BRET HART',
      completed: true,
      userId: 8,
    },
    {
      id: 9,
      todo: 'CODY RHODES (WWE UNDISPUTED CHAMPION)',
      completed: false,
      userId: 9,
    },
    {
      id: 10,
      todo: 'SHAWN MICHAELS',
      completed: false,
      userId: 10,
    },
    {
      id: 11,
      todo: '"THE FIEND" BRAY WYATT',
      completed: false,
      userId: 11,
    },
    {
      id: 12,
      todo: 'ULTIMATE WARRIOR',
      completed: true,
      userId: 12,
    },
    {
      id: 13,
      todo: 'BRUNO SAMMARTINO',
      completed: false,
      userId: 13,
    },
    {
      id: 14,
      todo: 'TIGER MASK',
      completed: false,
      userId: 14,
    },
    {
      id: 15,
      todo: 'TRIPLE H',
      completed: false,
      userId: 15,
    },
    {
      id: 16,
      todo: "ANDRE' THE GIANT",
      completed: true,
      userId: 16,
    },
    {
      id: 17,
      todo: 'RANDY ORTON',
      completed: false,
      userId: 17,
    },
    {
      id: 18,
      todo: 'YOKOZUNA',
      completed: false,
      userId: 18,
    },
    {
      id: 19,
      todo: 'LOGAN PAUL (UNITED STATES CHAMPION',
      completed: true,
      userId: 19,
    },
    {
      id: 20,
      todo: '"MAIN EVENT"JEY USO',
      completed: true,
      userId: 20,
    },
    {
      id: 21,
      todo: 'GUNTHER',
      completed: false,
      userId: 21,
    },
    {
      id: 22,
      todo: 'EDDIE GUERRERO',
      completed: false,
      userId: 22,
    },
    {
      id: 23,
      todo: 'ROB VAN DAM',
      completed: true,
      userId: 23,
    },
    {
      id: 24,
      todo: 'CM PUNK',
      completed: false,
      userId: 24,
    },
    {
      id: 25,
      todo: 'BATISTA',
      completed: false,
      userId: 25,
    },
    {
      id: 26,
      todo: 'DREW MCINTYRE',
      completed: false,
      userId: 26,
    },
    {
      id: 27,
      todo: 'KURT ANGLE',
      completed: false,
      userId: 27,
    },
    {
      id: 28,
      todo: '"MACHO MAN" RANDY SAVAGE',
      completed: false,
      userId: 28,
    },
    {
      id: 29,
      todo: 'REY MYSTERIO',
      completed: false,
      userId: 29,
    },
    {
      id: 30,
      todo: 'LA KNIGHT',
      completed: false,
      userId: 30,
    },
    {
      id: 31,
      todo: 'SAMI ZAYN (INTERCONTINENTAL CHAMPION',
      completed: true,
      userId: 31,
    },
    {
      id: 32,
      todo: 'FINN BALOR (TAG TEAM CHAMPION)',
      completed: true,
      userId: 32,
    },
    {
      id: 33,
      todo: 'DAMIAN PRIEST (WORLD HEAVIWEIGHT CHAMPION',
      completed: false,
      userId: 33,
    },
    {
      id: 34,
      todo: 'KEVIN OWENS',
      completed: false,
      userId: 34,
    },
    {
      id: 35,
      todo: 'KANE',
      completed: false,
      userId: 35,
    },
    {
      id: 36,
      todo: 'SPIDER-MAN',
      completed: false,
      userId: 36,
    },
    {
      id: 37,
      todo: 'AJ ASTYLES',
      completed: false,
      userId: 37,
    },
    {
      id: 38,
      todo: 'BOOKER T',
      completed: true,
      userId: 38,
    },
    {
      id: 39,
      todo: 'RICOCHET',
      completed: false,
      userId: 39,
    },
    {
      id: 40,
      todo: 'YELLOW DEVIL',
      completed: false,
      userId: 40,
    },
  ];

  constructor(private UsersService: UsersService) {}

  getAll(): Todo[] {
    return this.arrayTodo;
  }

  getCompleted(): Todo[] {
    return this.arrayTodo.filter((Todo) => Todo.completed);
  }

  getIncompleted(): Todo[] {
    return this.arrayTodo.filter((Todo) => !Todo.completed);
  }
  getUsers() {
    return this.UsersService.getAllUsers();
  }
}
