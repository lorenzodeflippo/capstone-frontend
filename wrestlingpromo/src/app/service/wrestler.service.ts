import { Injectable } from '@angular/core';
import { Roster, Wrestler } from '../interface/wrestler.inteface';

@Injectable({
  providedIn: 'root',
})
export class WrestlerService {
  wrestlers: Wrestler[] = [
    {
      id: 1,
      name: 'John',
      lastname: 'Cena',
      stats_total: 99,
      roster: Roster.RAW,
    },
    {
      id: 2,
      name: 'John',
      lastname: 'Cena',
      stats_total: 99,
      roster: Roster.SMACKDOWN,
    },
    {
      id: 3,
      name: 'John',
      lastname: 'Cena',
      stats_total: 99,
      roster: Roster.RAW,
    },
  ];
  constructor() {}

  getWrestlers(roster?: Roster) {
    if (roster)
      return this.wrestlers.filter((wrestler) => wrestler.roster === roster);

    return this.wrestlers;
  }
}
