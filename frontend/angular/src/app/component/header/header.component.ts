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

  //TODO: https://stackoverflow.com/questions/35397198/how-can-i-watch-for-changes-to-localstorage-in-angular2/35397253

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


