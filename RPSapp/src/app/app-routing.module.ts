import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RpsResultDisplayComponent } from './routes/rps-result-display/rps-result-display.component';
import { RpsSelectComponent } from './routes/rps-select/rps-select.component';


const routes: Routes = [
{path: "result", component: RpsResultDisplayComponent },
{path: "selection", component: RpsSelectComponent },

{path: "**", redirectTo: "selection" },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
