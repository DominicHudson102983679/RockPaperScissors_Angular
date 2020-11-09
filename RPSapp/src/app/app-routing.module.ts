import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RpsResultDisplayComponent } from './routes/rps-result-display/rps-result-display.component';
import { RpsSelectComponent } from './routes/rps-select/rps-select.component';
import { RpsReportDisplayComponent } from './routes/rps-report-display/rps-report-display.component';


const routes: Routes = [
{path: "selection", component: RpsSelectComponent }, 
{path: "result", component: RpsResultDisplayComponent },
{path: "leaderboard", component: RpsReportDisplayComponent },

{path: "**", redirectTo: "selection" },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
