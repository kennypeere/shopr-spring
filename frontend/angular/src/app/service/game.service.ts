import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../entity/Game";
import {MatSnackBar} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  getGames(): Observable<Game[]>{
    return this.httpClient.get<Game[]>("/game");
  }

  findGameById(id: number): Observable<Game>{
    return this.httpClient.get<Game>('game/'+id);
  }

  addGame(game: Game) {
    this.httpClient.post<Game>("/game/add", game, this.httpOptions)
      .toPromise()
      .then(
        result => {
          //  Success
          this.openSnackBar(game.title + " successfully created!", "INFO");
        },
        message => {
          //  Error
          if (game.publisher === undefined || game.title === undefined || game.minimumAge ===  undefined || game.genre === undefined || game.supplierId === undefined || game.price === undefined){
            this.openSnackBar("Please make sure all fields are filled in", "ERROR");
          }
          else{
            this.openSnackBar("Failed to create Game: " + game.title, "ERROR");
          }
        }
      )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
