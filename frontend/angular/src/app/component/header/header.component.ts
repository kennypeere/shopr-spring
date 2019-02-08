import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getLoggedInUserFirstName(): string{
    return this.userService.getLoggedInUserFirstName();
  }

  resetLoggedInUser(): void{
    this.userService.resetLoggedInUser();
  }

}
