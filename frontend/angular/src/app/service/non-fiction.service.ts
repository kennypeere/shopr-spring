import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {NonFiction} from "../entity/NonFiction";
import {MatSnackBar} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class NonFictionService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  getNonFictions(): Observable<NonFiction[]>{
    return this.httpClient.get<NonFiction[]>("/nonFiction");
  }

  findNonFictionById(id: number): Observable<NonFiction>{
    return this.httpClient.get<NonFiction>('nonFiction/'+id);
  }

  addNonFiction(nonFiction: NonFiction) {
    this.httpClient.post<NonFiction>("/nonFiction/add", nonFiction, this.httpOptions)
      .toPromise()
      .then(
        result => {
          //  Success
          this.openSnackBar(nonFiction.title + " successfully created!", "INFO");
        },
        message => {
          //  Error
          if (nonFiction.author === undefined ||
            nonFiction.title === undefined ||
            nonFiction.numberOfPages === undefined ||
            nonFiction.subject === undefined ||
            nonFiction.isbn === undefined ||
            nonFiction.supplierId === undefined ||
            nonFiction.price === undefined){
            this.openSnackBar("Please make sure all fields are filled in", "ERROR");
          }
          else{
            this.openSnackBar("Failed to create LP: " + nonFiction.title, "ERROR");
          }
        }
      )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
