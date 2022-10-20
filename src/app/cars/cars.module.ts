import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';

@NgModule({
  declarations: [
    CarsListComponent
  ],
  exports: [
    CarsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarsModule { }
