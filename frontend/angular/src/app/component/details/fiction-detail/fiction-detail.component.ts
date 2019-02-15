import {Component, OnInit} from '@angular/core';
import {Fiction} from "../../../entity/Fiction";
import {ActivatedRoute} from "@angular/router";
import {FictionService} from "../../../service/fiction.service";
import {DeleteDialogComponent} from "../../input/delete-dialog/delete-dialog.component";
import {MatDialog} from "@angular/material";
import {BehaviorSubject} from "rxjs";
import {UserService} from "../../../service/user.service";

export interface DialogData {
  title: string;
  id: number;
}

@Component({
  selector: 'app-fiction-detail',
  templateUrl: './fiction-detail.component.html',
  styleUrls: ['./fiction-detail.component.css']
})
export class FictionDetailComponent implements OnInit {
  fiction: Fiction = new Fiction();
  fav: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private userService: UserService, private fictionService: FictionService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.fictionService.findFictionById(id).subscribe(fiction => this.fiction = fiction);
    this.isFavourite(id);
  }

  private isFavourite(id: number) {
    this.userService.isFavourite(id).subscribe(result => this.fav.next(result));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {title: this.fiction.title, id: this.fiction.id}
    });
  }

  addFavourite() {
    this.userService.addFavourite(this.fiction.id).subscribe(()=> this.isFavourite(this.fiction.id));
  }

}
