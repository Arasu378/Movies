export  class DateModel {
  private dateString: string;

  constructor(dateString: string) {
    this.dateString = dateString;
  }

  get _dateString(): string {
    return this.dateString;
  }

  set _dateString(value: string) {
    this.dateString = value;
  }
}
