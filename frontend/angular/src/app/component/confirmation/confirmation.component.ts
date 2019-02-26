import {Component, OnInit} from '@angular/core';
import {OrderLine} from "../../entity/OrderLine";
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  columnsToDisplay = ['id', 'title','amount', 'price', 'subtotal'];
  cart: OrderLine[] = this.storageService.retrieveFromStorage();
  totalPrice: number = 0;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    this.totalPrice = 0;
    for (let ol of this.cart){
      this.totalPrice += ol.price;
      this.totalPrice = parseFloat(this.totalPrice.toFixed(2));
    }
  }

}
