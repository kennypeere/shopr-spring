import { Component, OnInit } from '@angular/core';
import {Lp} from "../../../entity/Lp";
import {LpService} from "../../../service/lp.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-lp-detail',
  templateUrl: './lp-detail.component.html',
  styleUrls: ['./lp-detail.component.css']
})
export class LpDetailComponent implements OnInit {
  lp: Lp = new Lp();
  amount: number = 0;

  constructor(private userService: UserService, private lpService: LpService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.lpService.findLpById(id).subscribe(lp => this.lp = lp);
  }

  //TODO: functie verder implementeren
  isFavourite(): boolean{
    return true;
    // return this.userService.isFavourite(lp.id);
  }

}
