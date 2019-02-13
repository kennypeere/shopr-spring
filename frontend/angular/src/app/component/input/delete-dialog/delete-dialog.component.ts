import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DialogData} from "../../details/lp-detail/lp-detail.component";
import {ArticleService} from "../../../service/article.service";
import {Location} from '@angular/common';

@Component({
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

  constructor(private articleService: ArticleService, private _location: Location, public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onYesClick(): void {
    this.articleService.delete(this.data.id);
    this._location.back();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
