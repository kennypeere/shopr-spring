import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  selectedType: string;
  minSliderMinValue= 0;
  lowestPrice: number;
  highestPrice: number
  heighestPrice= 0;
  maxSliderMaxValue= 70;
  minPrice: number;
  maxPrice: number;
  searchRadio: string = "";
  public isbnMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.fetchMinPrice();
    this.fetchMaxPrice();
    this.minPrice = this.lowestPrice;
    this.maxPrice = this.highestPrice;
  }

  isLp(): boolean{
    return this.selectedType == 'lp';
  }

  isGame(): boolean{
    return this.selectedType == 'game';
  }

  isBook(): boolean{
    return (this.selectedType == 'fiction' || this.selectedType == 'nonFiction');
  }

  selectedRadioSearchId(): boolean{
    return (this.searchRadio == "id");
  }

  fetchMinPrice() {
    this.articleService.fetchLowestPrice().subscribe(value => {
      this.lowestPrice = value;
      this.lowestPrice = Math.floor(this.lowestPrice);
    });
  }

  fetchMaxPrice() {
    this.articleService.fetchHighestPrice().subscribe(value => {
      this.highestPrice = value;
      this.highestPrice = Math.ceil(this.highestPrice);
    });
  }

}
