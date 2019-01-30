import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralpageComponent } from "./component/generalpage/generalpage.component";
import { LogincardComponent } from "./component/logincard/logincard.component";
import { LpDatatableComponent } from "./component/datatable/lp-datatable/lp-datatable.component";

const routes: Routes = [
  { path:'', component: GeneralpageComponent },
  { path:'login', component: LogincardComponent },
  { path:'lp-datatable', component: LpDatatableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
