import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralpageComponent } from "./component/generalpage/generalpage.component";
import { LogincardComponent } from "./component/logincard/logincard.component";
import { LpDatatableComponent } from "./component/datatable/lp-datatable/lp-datatable.component";
import { GameDatatableComponent } from "./component/datatable/game-datatable/game-datatable.component";
import { FictionDatatableComponent } from "./component/datatable/fiction-datatable/fiction-datatable.component";
import { NonFictionDatatableComponent } from "./component/datatable/non-fiction-datatable/non-fiction-datatable.component";

const routes: Routes = [
  { path:'', component: GeneralpageComponent },
  { path:'login', component: LogincardComponent },
  { path:'lp-datatable', component: LpDatatableComponent },
  { path:'game-datatable', component: GameDatatableComponent },
  { path:'fiction-datatable', component: FictionDatatableComponent },
  { path:'non-fiction-datatable', component: NonFictionDatatableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
