import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { MatDialog } from '@angular/material/dialog';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import {
  interestedCars,
  listingDetails,
  thumbnails,
} from 'src/app/shared/services/model/model';
import { DatePipe } from '@angular/common';
import { Lightbox } from 'ngx-lightbox';
import { WriteReviewComponent } from '../../reviews/write-review/write-review.component';
import Swal from 'sweetalert2';
import { CommonService } from 'src/app/shared/services/common/common.service';
interface data {
  value: string ;
}
interface gallery {
  src: string
}
@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss'],
})
export class ListingDetailsComponent {
  public routes = routes;
  public gallery: Array<gallery> = [];
  public listingDetails: listingDetails[] = [];
  public thumbnails: thumbnails[] = [];
  public interestedCars: interestedCars[] = [];
  showTimePicker: Array<string> = [];
  myTime: Date = new Date();
  myTime2: Date = new Date();
  public selectedValue1 !: string;
  public selectedValue2 !: string;
  selectedList1: data[] = [
    { value: 'Newyork Office - 78, 10th street Laplace USA' },
    { value: 'Newyork Office - 12, 5th street USA' },
    
  ];
  selectedList2: data[] = [
    { value: 'Newyork Office - 78, 10th street Laplace USA' },
    { value: 'Newyork Office - 12, 5th street USA' },
    
  ];
  constructor(private data: DataService,
    private commonService:CommonService,
     private datePipe: DatePipe,private _lightbox: Lightbox,private matDialog: MatDialog) {
    this.listingDetails = this.data.listingDetails;
    this.thumbnails = this.data.thumbnails;
    this.interestedCars = this.data.interestedCars;
    for (let i = 1; i <= 12; i++) {
      const src = 'assets/img/gallery/gallery-thumb-0' + i + '.jpg';
      this.gallery.push({ src: src });
    }
    this.getReviewById()
  }

  productId:string='5';
  getReviewById(){
     this.commonService.getReviewById(this.productId).subscribe({
          next: (res: any) => {
            if(res.status==='true'){
               Swal.fire({
                          title: '',
                          text: `${res.message}`,
                          icon: 'success',
                          confirmButtonColor: '#0E82FD',
                });             
              }else{
                 Swal.fire({
                          title: `${res.message}`,
                          text: '',
                          icon: 'error',
                          confirmButtonColor: '#0E82FD',
                });             
              }
          },
          error: (err: any) => {
            //alert('Something went wrong while submitting');
            console.error(err);
          }
        });
  }

  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav-thumbnails',
    nav: true,
  };
  public slideConfig2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.detail-bigimg',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    nav: true,
  };
  interestedCarsOptions: OwlOptions = {
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
      0:{
        items:2
      },
      
      550:{
        items:3
      },
      700:{
        items:4
      },
      1000:{
        items:5
      }
    }
  };
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
       writereview(): void {    
         const dialogResult = this.matDialog.open(WriteReviewComponent);
           dialogResult.afterClosed().subscribe((res: string) => {
           });   
         }
  
  open(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }

  close(): void {
    this._lightbox.close();
  }
  
}
