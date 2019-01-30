import {Article} from "./Article";

export class Game extends Article{
  private _genre: string;
  private _publisher: string;
  private _minimumAge: number;

  constructor() {
    super();
  }

  get genre(): string {
    return this._genre;
  }

  set genre(value: string) {
    this._genre = value;
  }

  get publisher(): string {
    return this._publisher;
  }

  set publisher(value: string) {
    this._publisher = value;
  }

  get minimumAge(): number {
    return this._minimumAge;
  }

  set minimumAge(value: number) {
    this._minimumAge = value;
  }
}
