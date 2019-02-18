import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {OrderLine} from "../entity/OrderLine";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage: BehaviorSubject<OrderLine[]> = new BehaviorSubject<OrderLine[]>(JSON.parse(localStorage.getItem('cart')));

  addToStorage(cart: OrderLine[]){
    localStorage.setItem('cart', JSON.stringify(cart));
    this.storage.next(cart);
  }

  retrieveFromStorage(): OrderLine[]{
    return JSON.parse(localStorage.getItem('cart'));
  }

  constructor() { }
}
