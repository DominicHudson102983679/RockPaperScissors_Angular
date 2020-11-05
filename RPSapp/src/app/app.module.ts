import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpsResultDisplayComponent } from './routes/rps-result-display/rps-result-display.component';
import { RpsSelectComponent } from './routes/rps-select/rps-select.component';
import { ScoreListComponent } from './components/score-list/score-list.component';
import { ScoreComponent } from './components/score/score.component';
import { RpsReportDisplayComponent } from './routes/rps-report-display/rps-report-display.component';

@NgModule({
  declarations: [
    AppComponent,
    RpsResultDisplayComponent,
    RpsSelectComponent,
    ScoreListComponent,
    ScoreComponent,
    RpsReportDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
