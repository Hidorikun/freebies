import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreebiesListComponent } from './components/dashboard/freebies-list/freebies-list.component';
import {HttpClientModule} from '@angular/common/http';
import { FreebiesSearchComponent } from './components/dashboard/freebies-search/freebies-search.component';
import { FreebiesFavoritesComponent } from './components/dashboard/freebies-favorites/freebies-favorites.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FreebiesListComponent,
    FreebiesSearchComponent,
    FreebiesFavoritesComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
