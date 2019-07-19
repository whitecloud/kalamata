import { AttributeMethod } from './attribute-method.model';

export class Attribute {
  key: number;
  value: any;
  date: Date; // unix timestamp?
  method?: string;
  optOut: boolean;
  comment?: string;

  constructor(date: Date) {
    this.key = 0;
    this.value = undefined;
    this.date = date;
    this.method = undefined;
    this.optOut = false;
    this.comment = undefined;
  }
}