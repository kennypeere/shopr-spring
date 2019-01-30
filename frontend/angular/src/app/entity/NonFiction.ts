import {Book} from "./Book";

export class NonFiction extends Book{
  private _subject: string;

  constructor() {
    super();
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }
}
