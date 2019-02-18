import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ArticleService} from "../../service/article.service";
import {Article} from "../../entity/Article";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  columnsToDisplay = ['id', 'type', 'title', 'price'];
  dataSource : MatTableDataSource<Article>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.fetchArticles();
  }

  fetchArticles() {
    this.articleService.getArticles().subscribe(data => {
      this.dataSource = new MatTableDataSource<Article>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
