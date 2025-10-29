import { Component } from '@angular/core';

import { DatePipe } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { listingGrid } from 'src/app/shared/services/model/model';
interface data {
  value: string;
}
@Component({
  selector: 'app-brand-products',
  templateUrl: './brand-products.component.html',
  styleUrl: './brand-products.component.css'
})
export class BrandProductsComponent {
 public selectedValue1!: string;
  public selectedValue2!: string;
  public selectedValue3!: string;
  public listingGrid: listingGrid[] = [];

  constructor(private data: DataService,private datePipe: DatePipe) {
    this.listingGrid = this.data.listingGrid;
  }

  public routes = routes;

  slidevalue = 55;

  selectedList1: data[] = [
    { value: '5' },
    { value: '10' },
    { value: '15' },
    { value: '20' },
  ];

  TopBrandcategry: OwlOptions = {
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:3
      },
      
      550:{
        items:3
      },
      700:{
        items:4
      },
      1000:{
        items:4
      },
      1200:{
        items:5
      },
      1400:{
        items:7
      }
    },
  };
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
