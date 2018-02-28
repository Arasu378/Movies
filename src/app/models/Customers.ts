import {CustomFieldValues} from './CustomFieldValues';
import {Position} from './Position';
import {TagInfo} from './TagInfo';

export class Customers {
  CustomFieldValues: CustomFieldValues[];
  address: string;
  addressComplement: string;
  contactEmail: string;
  contactFax: string;
  contactFirstName: string;
  contactLastName: string;
  contactMobile: string;
  contactPhone: string;
  id: string;
  myId: string;
  name: string;
  position: Position;
  tagInfo: TagInfo[];
  tags: string[];


}
