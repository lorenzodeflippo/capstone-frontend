export interface Wrestler {
  id: number;
  name: string;
  lastname: string;
  stats_total: number;
  roster: Roster;
}

export enum Roster {
  SMACKDOWN = 'smackdown',
  RAW = 'raw',
}
