import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CarsRoutingModule } from './cars/cars-routing.module';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { CoreModule } from './core-module/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarsRoutingModule,
    HttpClientModule,
    CoreModule,
    CarsModule, 
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
