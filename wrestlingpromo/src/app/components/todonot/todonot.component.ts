import { Component, inject } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { UsersService } from '../../service/users.service';
import { Todo } from '../../interface/todo';
import { Users } from '../../interface/users';
import { Roster, Wrestler } from '../../interface/wrestler.inteface';
import { WrestlerService } from '../../service/wrestler.service';

@Component({
  selector: 'app-todonot',
  templateUrl: './todonot.component.html',
  styleUrl: './todonot.component.scss',
})
export class TodonotComponent {
  Homelist: Todo[] = [];
  users: Users[] = [];

  wrestlers: Wrestler[] = [];
  updatedWrestlers: Wrestler[] = [];
  private wrestlerService = inject(WrestlerService);
  protected Roster = Roster;

  constructor(
    private todoService: TodoService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.wrestlers = this.wrestlerService.getWrestlers();
  }

  toggleRoster(updatedWrestler: Wrestler) {
    updatedWrestler.roster === Roster.RAW
      ? (updatedWrestler.roster = Roster.SMACKDOWN)
      : (updatedWrestler.roster = Roster.RAW);

    const wrestlerIndex = this.updatedWrestlers.findIndex(
      (wrestler) => wrestler.id === updatedWrestler.id
    );

    wrestlerIndex === -1
      ? this.updatedWrestlers.push(updatedWrestler)
      : this.updatedWrestlers.splice(wrestlerIndex, 1);

    console.log(this.updatedWrestlers);
  }

  isWrestlerUpdated(currentWrestler: Wrestler) {
    return !!this.updatedWrestlers.find(
      (wrestler) => wrestler.id === currentWrestler.id
    );
  }
}
