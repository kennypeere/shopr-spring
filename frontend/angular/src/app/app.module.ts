import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LogincardComponent} from './component/logincard/logincard.component';
import {UserService} from "./service/user.service";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatOptionModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSortModule, MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from './component/navbar/navbar.component';
import {HeaderComponent} from './component/header/header.component';
import {GeneralpageComponent} from './component/generalpage/generalpage.component';
import {FooterComponent} from './component/footer/footer.component';
import {LpDatatableComponent} from "./component/datatable/lp-datatable/lp-datatable.component";
import {GameDatatableComponent} from './component/datatable/game-datatable/game-datatable.component';
import {FictionDatatableComponent} from './component/datatable/fiction-datatable/fiction-datatable.component';
import {NonFictionDatatableComponent} from './component/datatable/non-fiction-datatable/non-fiction-datatable.component';
import {LpDetailComponent} from './component/details/lp-detail/lp-detail.component';
import {GameDetailComponent} from './component/details/game-detail/game-detail.component';
import {FictionDetailComponent} from './component/details/fiction-detail/fiction-detail.component';
import {NonFictionDetailComponent} from './component/details/non-fiction-detail/non-fiction-detail.component';
import {SearchComponent} from './component/search/search.component';
import {AddLpComponent} from './component/add/add-lp/add-lp.component';
import {AddGameComponent} from './component/add/add-game/add-game.component';
import {AddFictionComponent} from './component/add/add-fiction/add-fiction.component';
import {AddNonFictionComponent} from './component/add/add-non-fiction/add-non-fiction.component';
import {TextMaskModule} from "angular2-text-mask";
import {IsbnInputComponent} from './component/input/isbn-input/isbn-input.component';
import {FormFieldCustomControlComponent} from './component/input/form-field-custom-control/form-field-custom-control.component';
import {PriceInputComponent} from './component/input/price-input/price-input.component';
import {DeleteDialogComponent} from './component/input/delete-dialog/delete-dialog.component';
import {ShoppingCartComponent} from './component/shopping-cart/shopping-cart.component';
import {StorageService} from "./service/storage.service";
import { FlowComponent } from './component/flow/flow.component';
import { PaymentDetailsComponent } from './component/payment-details/payment-details.component';
import { FavouritesComponent } from './component/favourites/favourites.component';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';


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
    NonFictionDatatableComponent,
    LpDetailComponent,
    GameDetailComponent,
    FictionDetailComponent,
    NonFictionDetailComponent,
    SearchComponent,
    AddLpComponent,
    AddGameComponent,
    AddFictionComponent,
    AddNonFictionComponent,
    IsbnInputComponent,
    FormFieldCustomControlComponent,
    PriceInputComponent,
    DeleteDialogComponent,
    ShoppingCartComponent,
    FlowComponent,
    PaymentDetailsComponent,
    FavouritesComponent,
    ConfirmationComponent,
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
    MatSortModule,
    MatTooltipModule,
    MatSliderModule,
    MatRadioModule,
    MatSnackBarModule,
    TextMaskModule,
    MatDialogModule,
    MatDividerModule,
    MatStepperModule
  ],
  providers: [UserService, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}, StorageService],
  bootstrap: [AppComponent],
  entryComponents: [DeleteDialogComponent]
})
export class AppModule { }
