import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpsResultDisplayComponent } from './routes/rps-result-display/rps-result-display.component';
import { RpsSelectComponent } from './routes/rps-select/rps-select.component';

@NgModule({
  declarations: [
    AppComponent,
    RpsResultDisplayComponent,
    RpsSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
