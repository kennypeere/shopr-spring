import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Article} from "../../entity/Article";
import {ArticleService} from "../../service/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-generalpage',
  templateUrl: './generalpage.component.html',
  styleUrls: ['./generalpage.component.css']
})
export class GeneralpageComponent implements OnInit {
  cheapest8Articles: Article[];

  constructor(private userService: UserService, private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.getCheapest8Articles();
  }

  getCheapest8Articles(){
    this.articleService.getCheapest8Articles().subscribe( articles => this.cheapest8Articles = articles);
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
