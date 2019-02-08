import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fiction} from "../entity/Fiction";
import {MatSnackBar} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class FictionService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  getFictions(): Observable<Fiction[]>{
    return this.httpClient.get<Fiction[]>("/fiction");
  }

  findFictionById(id: number): Observable<Fiction>{
    return this.httpClient.get<Fiction>('fiction/'+id);
  }

  addFiction(fiction: Fiction) {
    this.httpClient.post<Fiction>("/fiction/add", fiction, this.httpOptions)
      .toPromise()
      .then(
        result => {
          //  Success
          this.openSnackBar(fiction.title + " successfully created!", "INFO");
        },
        message => {
          //  Error
          if (fiction.author === undefined ||
            fiction.title === undefined ||
            fiction.numberOfPages === undefined ||
            fiction.genre === undefined ||
            fiction.summary === undefined ||
            fiction.isbn === undefined ||
            fiction.supplierId === undefined ||
            fiction.price === undefined){
            this.openSnackBar("Please make sure all fields are filled in", "ERROR");
          }
          else{
            this.openSnackBar("Failed to create LP: " + fiction.title, "ERROR");
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
