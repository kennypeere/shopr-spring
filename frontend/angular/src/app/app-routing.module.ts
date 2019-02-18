import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeneralpageComponent} from "./component/generalpage/generalpage.component";
import {LogincardComponent} from "./component/logincard/logincard.component";
import {LpDatatableComponent} from "./component/datatable/lp-datatable/lp-datatable.component";
import {GameDatatableComponent} from "./component/datatable/game-datatable/game-datatable.component";
import {FictionDatatableComponent} from "./component/datatable/fiction-datatable/fiction-datatable.component";
import {NonFictionDatatableComponent} from "./component/datatable/non-fiction-datatable/non-fiction-datatable.component";
import {LpDetailComponent} from "./component/details/lp-detail/lp-detail.component";
import {GameDetailComponent} from "./component/details/game-detail/game-detail.component";
import {FictionDetailComponent} from "./component/details/fiction-detail/fiction-detail.component";
import {NonFictionDetailComponent} from "./component/details/non-fiction-detail/non-fiction-detail.component";
import {AddLpComponent} from "./component/add/add-lp/add-lp.component";
import {AddGameComponent} from "./component/add/add-game/add-game.component";
import {AddFictionComponent} from "./component/add/add-fiction/add-fiction.component";
import {AddNonFictionComponent} from "./component/add/add-non-fiction/add-non-fiction.component";
import {FlowComponent} from "./component/flow/flow.component";

const routes: Routes = [
  { path:'', component: GeneralpageComponent },
  { path:'login', component: LogincardComponent },
  { path:'lp-datatable', component: LpDatatableComponent },
  { path:'game-datatable', component: GameDatatableComponent },
  { path:'fiction-datatable', component: FictionDatatableComponent },
  { path:'non-fiction-datatable', component: NonFictionDatatableComponent },
  { path:'lp/:id', component: LpDetailComponent },
  { path:'game/:id', component: GameDetailComponent },
  { path:'fiction/:id', component: FictionDetailComponent },
  { path:'non-fiction/:id', component: NonFictionDetailComponent },
  { path:'add/lp', component: AddLpComponent },
  { path:'add/game', component: AddGameComponent },
  { path:'add/fiction', component: AddFictionComponent },
  { path:'add/non-fiction', component: AddNonFictionComponent },
  { path: 'checkout', component: FlowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
