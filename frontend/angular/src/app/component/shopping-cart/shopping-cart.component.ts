import {Component, OnInit} from '@angular/core';
import {OrderLine} from "../../entity/OrderLine";
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart: OrderLine[] = this.storageService.retrieveFromStorage();
  totalPrice: number = 0;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    for (let ol of this.cart){
      this.totalPrice += ol.price;
      this.totalPrice.toFixed(2);
    }

  }

}
