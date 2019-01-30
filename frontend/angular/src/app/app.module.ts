import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LogincardComponent} from './component/logincard/logincard.component';
import {UserService} from "./service/user.service";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatPaginatorModule,
  MatFormFieldModule, MatInputModule, MatOptionModule,
  MatSelectModule, MatTableModule, MatBadgeModule,
  MatTabsModule, MatIconModule, MatGridListModule, MatMenuModule, MatToolbarModule, MatSortModule
} from '@angular/material';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeaderComponent } from './component/header/header.component';
import { GeneralpageComponent } from './component/generalpage/generalpage.component';
import { FooterComponent } from './component/footer/footer.component';
import { LpDatatableComponent } from "./component/datatable/lp-datatable/lp-datatable.component";
import { GameDatatableComponent } from './component/datatable/game-datatable/game-datatable.component';
import { FictionDatatableComponent } from './component/datatable/fiction-datatable/fiction-datatable.component';
import { NonFictionDatatableComponent } from './component/datatable/non-fiction-datatable/non-fiction-datatable.component';


@NgModule({
  declarations: [
    AppComponent,
    LogincardComponent,
    NavbarComponent,
    HeaderComponent,
    GeneralpageComponent,
    FooterComponent,
    LpDatatableComponent,
    GameDatatableComponent,
    FictionDatatableComponent,
    NonFictionDatatableComponent
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
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
