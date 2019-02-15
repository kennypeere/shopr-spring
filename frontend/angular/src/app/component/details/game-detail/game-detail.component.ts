import {Component, OnInit} from '@angular/core';
import {Game} from "../../../entity/Game";
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../../service/game.service";
import {DeleteDialogComponent} from "../../input/delete-dialog/delete-dialog.component";
import {MatDialog} from "@angular/material";
import {BehaviorSubject} from "rxjs";
import {UserService} from "../../../service/user.service";

export interface DialogData {
  title: string;
  id: number;
}

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Game = new Game();
  fav: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private userService: UserService, private gameService: GameService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.gameService.findGameById(id).subscribe(game => this.game = game);
    this.isFavourite(id);
  }

  private isFavourite(id: number) {
    this.userService.isFavourite(id).subscribe(result => this.fav.next(result));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {title: this.game.title, id: this.game.id}
    });
  }

  addFavourite() {
    this.userService.addFavourite(this.game.id).subscribe(()=> this.isFavourite(this.game.id));
  }

}
