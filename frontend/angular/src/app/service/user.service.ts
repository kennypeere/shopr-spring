import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../entity/User";
import {Observable} from "rxjs";
import {Article} from "../entity/Article";
import {OrderLine} from "../entity/OrderLine";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private httpClient: HttpClient, private storageService: StorageService) {
  }

  getUsers(): Promise<User[]> {
    return this.httpClient.get<User[]>("/user").toPromise();
  }

  registerUser(user: User): void {
    this.httpClient.post<User>("/user/register", user, this.httpOptions).toPromise().catch(reason => console.error(reason));
  }

  login(userId: number): Promise<User> {
    return this.httpClient.post<User>("/user/find", userId)
      .toPromise()
      .then(foundUser => {
        sessionStorage.setItem("loggedInUserId", foundUser.id.toString());
        sessionStorage.setItem("loggedInUserFirstName", foundUser.firstName.toString());
        sessionStorage.setItem("loggedInUserLastName", foundUser.lastName.toString());
        return foundUser;
      })
      .catch(reason => this.handleError(reason));
  }

  private handleError(error: any) {
    return Promise.reject(error.message | error);
  }

  getLoggedInUserFirstName(): string {
    return sessionStorage.getItem("loggedInUserFirstName");
  }

  resetLoggedInUser(): void {
    sessionStorage.clear();
  }

  isFavourite(articleId: number): Observable<boolean> {
    let userId: number = Number.parseInt(sessionStorage.getItem("loggedInUserId"));
    return this.httpClient.get<boolean>(`/user/${userId}/favourites/${articleId}`);
  }

  addFavourite(articleId: number): Observable<Object> {
    let userId: number = Number.parseInt(sessionStorage.getItem("loggedInUserId"));
    return this.httpClient.get(`/user/${userId}/addFavourite/${articleId}`);
  }

  removeFavourite(articleId: number): Observable<Object> {
    let userId: number = Number.parseInt(sessionStorage.getItem("loggedInUserId"));
    return this.httpClient.get(`/user/${userId}/removeFavourite/${articleId}`);
  }

  addToCart(article: Article, amount: number) {
    let newOrderLine = new OrderLine(article, amount);

    if (localStorage.getItem('cart') == null) {
      let cart: OrderLine[] = [];
      cart.push(newOrderLine);
      this.storageService.addToStorage(cart);
    }
    else {
      let cart: OrderLine[] = JSON.parse(localStorage.getItem('cart'));
      let foundArticleIndex = cart.findIndex((value) => value.article.id == article.id);

      if (foundArticleIndex == -1) {
        cart.push(newOrderLine);
      }
      else {
        let ol: OrderLine = cart[foundArticleIndex];
        ol.amount += amount;
        cart[foundArticleIndex] = ol;
      }
      this.storageService.addToStorage(cart);
    }

  }
}
