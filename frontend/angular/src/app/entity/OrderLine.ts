import {Article} from "./Article";

export class OrderLine{
  article: Article;
  amount: number;
  price: number;

  constructor(article: Article, amount: number) {
    this.article = article;
    this.amount = amount;
    this.price = article.price * amount;
  }
}
