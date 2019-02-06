import {Component, OnInit} from '@angular/core';
import {User} from '../../entity/User';
import {UserService} from "../../service/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-logincard',
  templateUrl: './logincard.component.html',
  styleUrls: ['./logincard.component.css']
})
export class LogincardComponent implements OnInit {
  users: User[];
  // newUser: User = new User();
  registerForm: FormGroup;
  selectedUser: User;


  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.fetchUsers();
    this.registerForm = this.formBuilder.group({firstName: [''], lastName: ['']});
  }


  registerUser(): void {
    this.userService.registerUser(this.registerForm.value);
    // this.newUser = new User();
  }

  fetchUsers(): void {
    this.userService.getUsers().then(response => this.users = response);
  }

  login(): void {
    this.userService.login(this.selectedUser.id);
  }


}
