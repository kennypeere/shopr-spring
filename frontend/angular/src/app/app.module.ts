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
  MatTabsModule, MatIconModule, MatGridListModule, MatMenuModule, MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FullpageComponent } from './component/fullpage/fullpage.component';
import { NavbarComponent } from './component/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LogincardComponent,
    FullpageComponent,
    NavbarComponent
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
    ReactiveFormsModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
