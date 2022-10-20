import { Component, OnInit } from '@angular/core';
import { Car } from './models/car';

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})

export class CarsListComponent implements OnInit {

  cars : Car[]= [
    {
      id: 1,
      model: 'Mazda Rx7',
      plate: 'GD2121E',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 300,
      isFullyDamaged: true
    },
    {
      id: 2,
      model: 'Mercedes 124',
      plate: 'KRK2200',
      deliveryDate: '24-05-2017',
      deadline: '03-06-2016',
      client: {
        firstName: 'Michał',
        surname: 'Nowak'
      },
      cost: 1200,
      isFullyDamaged: true
    },
    {
      id: 3,
      model: 'Renault CLIO',
      plate: 'GWE22011',
      deliveryDate: '02-02-2017',
      deadline: '03-03-2017',
      client: {
        firstName: 'Beata',
        surname: 'Dampc',
      },
      cost: 2800,
      isFullyDamaged: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
