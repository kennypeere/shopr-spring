import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../entity/Article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  fetchLowestPrice(): Observable<number> {
    return this.httpClient.get<number>("/article/lowest");
  }

  fetchHighestPrice() {
    return this.httpClient.get<number>("/article/highest");
  }

  delete(id: number) {
    this.httpClient.delete("/article/delete/" + id).subscribe();
  }

  findById(id: number): Observable<Article>{
    return this.httpClient.get<Article>("/article/" + id);
  }
}
