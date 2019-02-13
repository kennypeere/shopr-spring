import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Game} from "../../../entity/Game";
import {GameService} from "../../../service/game.service";

@Component({
  selector: 'app-game-datatable',
  templateUrl: './game-datatable.component.html',
  styleUrls: ['./game-datatable.component.css']
})
export class GameDatatableComponent implements OnInit {
  columnsToDisplay = ['id', 'title', 'publisher', 'genre', 'price', 'details'];
  dataSource : MatTableDataSource<Game>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.fetchGames();
  }

  fetchGames() {
    this.gameService.getGames().subscribe(data => {
      this.dataSource = new MatTableDataSource<Game>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
