export class Article{

  private _id: number;
  private _price: number;
  private _title: string;
  private _types: string;
  private _supplierId: string;

  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get types(): string {
    return this._types;
  }

  set types(value: string) {
    this._types = value;
  }

  get supplierId(): string {
    return this._supplierId;
  }

  set supplierId(value: string) {
    this._supplierId = value;
  }
}
