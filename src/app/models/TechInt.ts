import {SkilledTrades} from './SkilledTrades';
import {Teams} from './Teams';

export  interface TechInt {
  CustomFieldValues: any;
  createdAt: string;
  email: string;
  firstName: string;
  hash: string;
  id: string;
  idDomain: string;
  isVerified: boolean;
  language: string;
  lastName: string;
  password: string;
  phone: string;
  profile: string;
  skilledTrades: SkilledTrades;
  teams: Teams;

}
