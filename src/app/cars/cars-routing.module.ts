import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const carsRoutes: Routes = [
//   {path: 'cars/:id', component: CarDetails}
];

@NgModule({
  imports: [
    RouterModule.forChild(carsRoutes)
],
  exports: [
    RouterModule
]
})

export class CarsRoutingModule { }
