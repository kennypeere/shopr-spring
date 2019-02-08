import { Injectable } from '@angular/core';
import {Lp} from "../entity/Lp";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../entity/Article";
import {reject} from "q";
import {MatSnackBar} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class LpService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  getLps(): Observable<Lp[]>{
    return this.httpClient.get<Lp[]>("/lp");
  }

  findLpById(id: number): Observable<Lp>{
    return this.httpClient.get<Lp>('lp/'+id);
  }

  addLp(lp: Lp) {
    this.httpClient.post<Lp>("/lp/add", lp, this.httpOptions)
      .toPromise()
      .then(
        result => {
        //  Success
          this.openSnackBar(lp.title + " successfully created!", "INFO");
        },
        message => {
        //  Error
          if (lp.artist === undefined || lp.title === undefined || lp.genre === undefined || lp.supplierId === undefined || lp.price === undefined){
            this.openSnackBar("Please make sure all fields are filled in", "ERROR");
          }
          else{
            this.openSnackBar("Failed to create LP: " + lp.title, "ERROR");
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
