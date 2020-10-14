import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];
// { path: "pick", component: NAMECOMPONENT }.
// { path: "pick", component: NAMECOMPONENT }.

// { path: "**", redirectTo: "pick" }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
