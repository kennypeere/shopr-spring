import { Component, OnInit } from '@angular/core';
import {Game} from "../../../entity/Game";
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../../service/game.service";
import {DeleteDialogComponent} from "../../input/delete-dialog/delete-dialog.component";
import {LpService} from "../../../service/lp.service";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Game = new Game();

  constructor(private gameService: GameService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.gameService.findGameById(id).subscribe(game => this.game = game);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {title: this.game.title, id: this.game.id}
    });
  }

  isFavourite(): boolean{
    return true;
  }

}
