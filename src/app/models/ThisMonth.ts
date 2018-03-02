import {Counts} from './Counts';
import {SkilledTrades} from './SkilledTrades';
import {Teams} from './Teams';

export class ThisMonth {
  allJobs: Counts[];
  counts: Counts[];
  openJobs: Counts[];
  CustomFieldValues: any;
  closedJobs: Counts[];
  createdAt: string;
  email: string;
  firstName: string;
  hash: string;
  id: string;
  idDomain: string;
  language: string;
  lastName: string;
  password: string;
  phone: string;
  profile: string;
  skilledTrades: SkilledTrades;
  teams: Teams;
}
