import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Article} from "../../entity/Article";
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-generalpage',
  templateUrl: './generalpage.component.html',
  styleUrls: ['./generalpage.component.css']
})
export class GeneralpageComponent implements OnInit {
  cheapest8Articles: Article[];

  constructor(private userService: UserService, private articleService: ArticleService) { }

  ngOnInit() {
    this.getCheapest8Articles();
  }

  getCheapest8Articles(){
    this.articleService.getCheapest8Articles().subscribe( articles => this.cheapest8Articles = articles);
  }

}
