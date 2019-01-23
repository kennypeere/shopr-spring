class User{
  private _id: number;
  private _name: string;
  private _firstName: string;



  constructor(id: number, name: string, firstName: string) {
    this._id = id;
    this._name = name;
    this._firstName = firstName;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

}
