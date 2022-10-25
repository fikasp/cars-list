import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarsService } from '../cars.service';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { Car } from './models/car';

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CarsListComponent implements OnInit {

  @ViewChild("totalCostRef") totalCostRef: TotalCostComponent | undefined;

  costParent: number = 0;
  costGrossFromChild: number = 0;
  cars: Car[] = [];

  constructor(private carsService: CarsService) { 
  }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carsService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars
      this.countTotalCost();
    }); 
  }

  ngAfterViewInit() {
    this.totalCostRef?.childShowGross()
  }
  
  countTotalCost(): void {
    this.costParent = this.cars
    .map((car) => car.cost)
    .reduce((prev, next) => prev + next)
  }

  onCostGrossFromChild(cost: number) : void {
    this.costGrossFromChild = cost;
  }

}
