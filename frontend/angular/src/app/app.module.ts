import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LogincardComponent} from './component/logincard/logincard.component';
import {UserService} from "./service/user.service";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule, MatInputModule, MatOptionModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    LogincardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    MatTabsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
