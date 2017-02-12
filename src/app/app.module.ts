import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MarkerComponent } from './components/MarkerComponent/marker.component';
import { MapComponent } from './components/MapComponent/map.component';
import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  declarations: [
  AppComponent,
  MarkerComponent,
  MapComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  AgmCoreModule.forRoot({
    apiKey: 'YOUR-API-KEY'      //your API-KEY here
  }),
  RouterModule.forRoot([
  {
    path: 'marker',
    component: MarkerComponent
  }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
