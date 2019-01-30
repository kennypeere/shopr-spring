import {Article} from "./Article";

export class Lp extends Article{

  private _artist: string;
  private _genre: string;

  constructor() {
    super();
  }

  get artist(): string {
    return this._artist;
  }

  set artist(value: string) {
    this._artist = value;
  }

  get genre(): string {
    return this._genre;
  }

  set genre(value: string) {
    this._genre = value;
  }
}
