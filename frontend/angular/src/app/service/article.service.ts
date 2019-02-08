import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
}
