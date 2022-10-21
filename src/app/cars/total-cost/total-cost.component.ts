import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.scss']
})
export class TotalCostComponent {
  private VAT: number = 1.23;

  @Input() costChildfromParent: number = 0;
  @Output() costGrossChildForParent: EventEmitter<number> = new EventEmitter<number>();

  childShowGross(): void {
    this.costGrossChildForParent.emit(this.costChildfromParent * this.VAT);
  }
  resetChild(): void {
    this.costGrossChildForParent.emit(0);
  }
}
