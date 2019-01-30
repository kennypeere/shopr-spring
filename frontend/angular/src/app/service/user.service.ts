import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../entity/User";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
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

  getLoggedInUserFirstName(): string{
    return sessionStorage.getItem("loggedInUserFirstName");
  }

  resetLoggedInUser(): void{
    sessionStorage.clear();
  }

  // TODO: functie verder implementeren
  // isFavourite(articleId: number): boolean{
  //   let userId: number = sessionStorage.getItem("loggedInUserId");
  // }

}
