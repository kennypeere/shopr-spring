import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullpageComponent } from "./component/fullpage/fullpage.component";

const routes: Routes = [
  {
    path:'',
    component: FullpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
