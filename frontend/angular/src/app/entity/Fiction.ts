import {Book} from "./Book";

export class Fiction extends Book{
  private _genre: string;
  private _summery: string;

  constructor() {
    super();
  }

  get genre(): string {
    return this._genre;
  }

  set genre(value: string) {
    this._genre = value;
  }

  get summary(): string {
    return this._summery;
  }

  set summery(value: string) {
    this._summery = value;
  }
}
