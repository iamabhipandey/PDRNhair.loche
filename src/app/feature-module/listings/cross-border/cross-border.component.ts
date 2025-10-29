import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { listingGrid } from 'src/app/shared/services/model/model';
import { AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
interface data {
  value: string;
}

@Component({
  selector: 'app-cross-border',
  templateUrl: './cross-border.component.html',
  styleUrl: './cross-border.component.css'
})
export class CrossBorderComponent {
  public selectedValue1!: string;
  public selectedValue2!: string;
  public selectedValue3!: string;
  public listingGrid: listingGrid[] = [];

  constructor(private data: DataService,private datePipe: DatePipe,private viewportScroller: ViewportScroller) {
    this.listingGrid = this.data.listingGrid;
  }
  ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  public routes = routes;

  slidevalue = 55;

  selectedList1: data[] = [
    { value: '5' },
    { value: '10' },
    { value: '15' },
    { value: '20' },
  ];
  selectedList2: data[] = [{ value: 'Discount' },{ value: 'Name' },{ value: 'New Arrivals' }, { value: 'Low to High' },{ value: 'High to Low' },{ value: 'Top Rated' }];
  selectedList3: data[] = [
    { value: 'Popular' },
    { value: 'Toyota Camry SE 350' },
    { value: 'Audi A3 2019 new' },
    { value: 'Ferrari 458 MM Speciale' },
    { value: 'Chevrolet Camaro' },
    { value: 'Acura Sport Version' },
  ];
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }

  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  public isClassAdded: boolean[] = [false];
  toggleTimePicker(value: string): void {
    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value;
    } else {
      this.showTimePicker = [];
    }
  }
  formatTime(date: Date) {
    const selectedDate: Date = new Date(date);
    return this.datePipe.transform(selectedDate, 'h:mm a');
  }
  showTimePicker: Array<string> = [];
  myTime: Date = new Date();
  myTime2: Date = new Date();
}
