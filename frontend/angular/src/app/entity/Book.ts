import {Article} from "./Article";

export class Book extends Article{
  private _numberOfPages: number;
  private _author: string;
  private _isbn: string;

  constructor() {
    super();
  }

  get numberOfPages(): number {
    return this._numberOfPages;
  }

  set numberOfPages(value: number) {
    this._numberOfPages = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get isbn(): string {
    return this._isbn;
  }

  set isbn(value: string) {
    this._isbn = value;
  }
}
