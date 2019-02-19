import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  selectedType: string;

  lowestPrice: number;
  highestPrice: number;

  minPrice: number = 0;
  maxPrice: number = 100;

  searchRadio: string = "";
  public isbnMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/];

  lpGenres: string[] = ['Classical', 'Pop', 'Rock', 'Dance', 'R&B', 'Hip-hop'];
  gameGenres: string[] = ['MMORPG', 'RPG', 'FPS', 'RTS', 'RACE'];
  fictionGenres: string[] = ['Thriller', 'Fantasy', 'Detective', 'Romance', 'Sci-Fi'];
  nonFictionSubjects: string[] = ['History', 'Cookbook', 'Science', 'Sports'];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.fetchMinPrice();
    this.fetchMaxPrice();
  }

  isLp(): boolean{
    return this.selectedType == 'lp';
  }

  isGame(): boolean{
    return this.selectedType == 'game';
  }

  isFiction(): boolean{
    return (this.selectedType == 'fiction');
  }

  isNonFiction(): boolean{
    return (this.selectedType == 'nonFiction');
  }

  selectedRadioSearchId(): boolean{
    return (this.searchRadio == "id");
  }

  fetchMinPrice() {
    console.log("Min price fetched from DB")
    this.articleService.fetchLowestPrice().subscribe(value => {
      this.lowestPrice = value;
      this.lowestPrice = Math.floor(this.lowestPrice);
      this.minPrice = this.lowestPrice;
    });
  }

  fetchMaxPrice() {
    this.articleService.fetchHighestPrice().subscribe(value => {
      this.highestPrice = value;
      this.highestPrice = Math.ceil(this.highestPrice);
      this.maxPrice = this.highestPrice;
    });
  }

}
