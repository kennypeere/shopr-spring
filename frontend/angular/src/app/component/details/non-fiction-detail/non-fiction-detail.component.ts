import {Component, OnInit} from '@angular/core';
import {NonFiction} from "../../../entity/NonFiction";
import {ActivatedRoute} from "@angular/router";
import {NonFictionService} from "../../../service/non-fiction.service";
import {MatDialog} from "@angular/material";
import {DeleteDialogComponent} from "../../input/delete-dialog/delete-dialog.component";
import {BehaviorSubject} from "rxjs";
import {UserService} from "../../../service/user.service";
import {Lp} from "../../../entity/Lp";
import {Article} from "../../../entity/Article";

export interface DialogData {
  title: string;
  id: number;
}

@Component({
  selector: 'app-non-fiction-detail',
  templateUrl: './non-fiction-detail.component.html',
  styleUrls: ['./non-fiction-detail.component.css']
})
export class NonFictionDetailComponent implements OnInit {
  nonFiction: NonFiction = new NonFiction();
  amount: number = 1;
  fav: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private userService: UserService, private nonFictionService: NonFictionService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.nonFictionService.findNonFictionById(id).subscribe(nonFiction => this.nonFiction = nonFiction);
    this.isFavourite(id);
  }

  private isFavourite(id: number) {
    this.userService.isFavourite(id).subscribe(result => this.fav.next(result));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {title: this.nonFiction.title, id: this.nonFiction.id}
    });
  }

  addFavourite() {
    this.userService.addFavourite(this.nonFiction.id).subscribe(()=> this.isFavourite(this.nonFiction.id));
  }

  removeFavourite() {
    this.userService.removeFavourite(this.nonFiction.id).subscribe(()=> this.isFavourite(this.nonFiction.id));
  }

  getLoggedInUserFirstName(): string{
    return this.userService.getLoggedInUserFirstName();
  }


  addToCart(lp: Lp) {
    this.userService.addToCart(<Article>this.nonFiction, this.amount);
  }
}
