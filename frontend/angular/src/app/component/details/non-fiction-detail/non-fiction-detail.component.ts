import {Component, OnInit} from '@angular/core';
import {NonFiction} from "../../../entity/NonFiction";
import {ActivatedRoute} from "@angular/router";
import {NonFictionService} from "../../../service/non-fiction.service";
import {MatDialog} from "@angular/material";
import {DeleteDialogComponent} from "../../input/delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-non-fiction-detail',
  templateUrl: './non-fiction-detail.component.html',
  styleUrls: ['./non-fiction-detail.component.css']
})
export class NonFictionDetailComponent implements OnInit {
  nonFiction: NonFiction = new NonFiction();
  amount: number = 0;

  constructor(private nonFictionService: NonFictionService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.nonFictionService.findNonFictionById(id).subscribe(nonFiction => this.nonFiction = nonFiction);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {title: this.nonFiction.title, id: this.nonFiction.id}
    });
  }

  //TODO: functie verder implementeren
  isFavourite(): boolean{
    return true;
    // return this.userService.isFavourite(nonFiction.id);
  }
}
