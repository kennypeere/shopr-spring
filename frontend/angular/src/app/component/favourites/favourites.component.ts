import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ArticleService} from "../../service/article.service";
import {Article} from "../../entity/Article";
import {Router} from "@angular/router";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  columnsToDisplay = ['id', 'type', 'title', 'price', 'details'];
  dataSource : MatTableDataSource<Article>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private articleService: ArticleService, private router: Router) { }

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

  navigateToDetailsPage(article: Article){
    switch (article.types){
      case "LP":{
        console.log(article.types);
        this.router.navigate(['/lp/' + article.id]);
        break;
      }
      case "GAME":{
        console.log(article.types);
        this.router.navigate(['/game/' + article.id]);
        break;
      }
      case "FICTION":{
        console.log(article.types);
        this.router.navigate(['/fiction/' + article.id]);
        break;
      }
      case "NON_FICTION":{
        console.log(article.types);
        this.router.navigate(['/non-fiction/' + article.id]);
        break;
      }
    }
  }

}
