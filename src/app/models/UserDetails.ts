import {SkilledTrades} from './SkilledTrades';
import {Teams} from './Teams';

export class UserDetails {
  public createdAt: string;
  public email: string;
  public firstName: string;
  public hash: string;
  public id: string;
  public isVerified: boolean;
  public language: string;
  public lastName: string;
  public password: string;
  public phone: string;
  public profile: string;
  public selected: boolean;
  public token: string;
  public skilledTrades: SkilledTrades;
  public teams: Teams;
  public CustomFieldValues: any;
  public domain: string;
  public idDevice: string;
  public idDomain: string;
  public deviceType: string;


  constructor() {
  }

  get _createdAt(): string {
    return this.createdAt;
  }

  set _createdAt(value: string) {
    this.createdAt = value;
  }

  get _email(): string {
    return this.email;
  }

  set _email(value: string) {
    this.email = value;
  }

  get _firstName(): string {
    return this.firstName;
  }

  set _firstName(value: string) {
    this.firstName = value;
  }

  get _hash(): string {
    return this.hash;
  }

  set _hash(value: string) {
    this.hash = value;
  }

  get _id(): string {
    return this.id;
  }

  set _id(value: string) {
    this.id = value;
  }

  get _isVerified(): boolean {
    return this.isVerified;
  }

  set _isVerified(value: boolean) {
    this.isVerified = value;
  }

  get _language(): string {
    return this.language;
  }

  set _language(value: string) {
    this.language = value;
  }

  get _lastName(): string {
    return this.lastName;
  }

  set _lastName(value: string) {
    this.lastName = value;
  }

  get _password(): string {
    return this.password;
  }

  set _password(value: string) {
    this.password = value;
  }

  get _phone(): string {
    return this.phone;
  }

  set _phone(value: string) {
    this.phone = value;
  }

  get _profile(): string {
    return this.profile;
  }

  set _profile(value: string) {
    this.profile = value;
  }

  get _selected(): boolean {
    return this.selected;
  }

  set _selected(value: boolean) {
    this.selected = value;
  }

  get _token(): string {
    return this.token;
  }

  set _token(value: string) {
    this.token = value;
  }

  get _skilledTrades(): SkilledTrades {
    return this.skilledTrades;
  }

  set _skilledTrades(value: SkilledTrades) {
    this.skilledTrades = value;
  }

  get _teams(): Teams {
    return this.teams;
  }

  set _teams(value: Teams) {
    this.teams = value;
  }

  get _CustomFieldValues(): any {
    return this.CustomFieldValues;
  }

  set _CustomFieldValues(value: any) {
    this.CustomFieldValues = value;
  }

  get _domain(): string {
    return this.domain;
  }

  set _domain(value: string) {
    this.domain = value;
  }

  get _idDevice(): string {
    return this.idDevice;
  }

  set _idDevice(value: string) {
    this.idDevice = value;


  }

  get _idDomain(): string {
    return this.idDomain;
  }

  set _idDomain(value: string) {
    this.idDomain = value;
  }
  get _deviceType(): string {
    return this.deviceType;
  }

  set _deviceType(value: string) {
    this.deviceType = value;
  }
}
