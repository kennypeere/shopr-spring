import { Component, OnInit } from '@angular/core';
import {Game} from "../../../entity/Game";
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../../service/game.service";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Game = new Game();

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.gameService.findGameById(id).subscribe(game => this.game = game);
  }

  isFavourite(): boolean{
    return true;
  }

}
