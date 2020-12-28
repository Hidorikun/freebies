import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreebiesListComponent } from './components/freebies-list/freebies-list.component';
import {HttpClientModule} from '@angular/common/http';
import { FreebiesSearchComponent } from './components/freebies-search/freebies-search.component';
import { FreebiesFavoritesComponent } from './components/freebies-favorites/freebies-favorites.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FreebiesListComponent,
    FreebiesSearchComponent,
    FreebiesFavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
