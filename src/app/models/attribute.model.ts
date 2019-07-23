export class Attribute {
  value: any;
  date: Date; // unix timestamp?
  method?: string;
  optOut: boolean;
  comment?: string;

  constructor(date: Date, method: string = null) {
    this.value = null;
    this.date = date;
    this.method = method;
    this.optOut = false;
    this.comment = null;
  }
}