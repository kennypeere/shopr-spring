import {Component, OnInit} from '@angular/core';
import {Lp} from "../../../entity/Lp";
import {LpService} from "../../../service/lp.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material";
import {DeleteDialogComponent} from "../../input/delete-dialog/delete-dialog.component";
import {UserService} from "../../../service/user.service";
import {BehaviorSubject} from "rxjs";
import {Article} from "../../../entity/Article";

export interface DialogData {
  title: string;
  id: number;
}

@Component({
  selector: 'app-lp-detail',
  templateUrl: './lp-detail.component.html',
  styleUrls: ['./lp-detail.component.css']
})
export class LpDetailComponent implements OnInit {
  lp: Lp = new Lp();
  amount: number = 1;
  fav: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private userService: UserService, private lpService: LpService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.lpService.findLpById(id).subscribe(lp => this.lp = lp);
    this.isFavourite(id);
  }

  private isFavourite(id: number) {
    this.userService.isFavourite(id).subscribe(result => this.fav.next(result));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {title: this.lp.title, id: this.lp.id}
    });
  }

  addFavourite() {
    this.userService.addFavourite(this.lp.id).subscribe(()=> this.isFavourite(this.lp.id));
  }

  removeFavourite() {
    this.userService.removeFavourite(this.lp.id).subscribe(()=> this.isFavourite(this.lp.id));
  }

  getLoggedInUserFirstName(): string{
    return this.userService.getLoggedInUserFirstName();
  }


  addToCart(lp: Lp) {
    this.userService.addToCart(<Article>this.lp, this.amount);
  }
}
