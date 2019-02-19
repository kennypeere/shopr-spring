import {Component, HostListener, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {BehaviorSubject} from "rxjs";
import {OrderLine} from "../../entity/OrderLine";
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemsInCart: number;

  constructor(private userService: UserService, private storageService: StorageService) {
  }

  setItemsInCart(storage: OrderLine[]) {
    if (storage) {
      this.itemsInCart = storage.length;
    }
  }

  ngOnInit() {
    this.storageService.storage.subscribe((storage) => {
      this.setItemsInCart(storage);
    });
  }

  getLoggedInUserFirstName(): string {
    return this.userService.getLoggedInUserFirstName();
  }

  resetLoggedInUser(): void {
    this.userService.resetLoggedInUser();
  }


}


