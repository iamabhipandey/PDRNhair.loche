import { DatePipe } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import {  testimonials, thumbnails1 } from 'src/app/shared/services/model/model';
interface data {
  value: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
})
export class HomeComponent implements AfterViewInit{
  public routes = routes
  public thumbnails1: thumbnails1[] = [];
  public testimonials: testimonials[] = [];
 
  constructor(private data: DataService, private datePipe: DatePipe,
    private commonService:CommonService,
      private router: Router,
  ) {
    this.testimonials = this.data.testimonials;
    this.thumbnails1 = this.data.thumbnails1;
    
    
  }
  Categories: OwlOptions = {
    loop:true,
    margin:24,
    nav:true,
    dots: false,
    autoplay:true,
    smartSpeed: 2000,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
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
      },
      1200:{
        items:5
      }
    }
  };
  secondsection: OwlOptions = {
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:2
      },
      
      550:{
        items:2
      },
      700:{
        items:3
      },
      1000:{
        items:3
      },
      1200:{
        items:3
      },
      1400:{
        items:3
      }
    },
  };
  offOwlOptions: OwlOptions = {
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay:true,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
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
        items:4
      },
      1200:{
        items:5
      },
      1400:{
        items:5
      }
    },
  };
    ExploreTopBrands: OwlOptions = {
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      
      550:{
        items:3
      },
      700:{
        items:3
      },
      1000:{
        items:3
      },
      1200:{
        items:3
      },
   
    },
  };
  TopBrands: OwlOptions = {
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:2
      },
      
      550:{
        items:3
      },
      700:{
        items:3
      },
      1000:{
        items:4
      },
      1200:{
        items:4
      },
      1400:{
        items:5
      }
    },
  };
  ArrivalLetestDroduct: OwlOptions = {
    loop:true,
    margin:17,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:2
      },
      
      550:{
        items:4
      },
      700:{
        items:4
      },
      1000:{
        items:5
      },
      1200:{
        items:5
      },
      1400:{
        items:5
      }
    },
  };
  ShadiLetestproduct: OwlOptions = {
    loop:true,
    margin:24,
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
        items:4
      },
      700:{
        items:4
      },
      1000:{
        items:5
      },
      1200:{
        items:6
      },
      1400:{
        items:7
      }
    },
  };
  blogsliderOwlOptions: OwlOptions = {
    loop:true,
      margin:24,
      nav:true,
      dots:false,
      smartSpeed: 2000,
      autoplay:false,
      navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>'
      ],
    responsive:{
      0:{
        items:1
      },				
      550:{
        items:1
      },
      768:{
        items:3
      },
      1200:{
        items:3
      }
    }
  };
  brandsliderOwlOptions: OwlOptions = {
    loop:true,
      margin:24,
      nav:false,
      dots:false,
      smartSpeed: 2000,
      autoplay:false,
      navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>'
      ],
      responsive:{
        0:{
          items:1
        },				
        550:{
          items:3
        },
        768:{
          items:4
        },
        1000:{
          items:5
        },
        1200:{
          items:7
        }
      }
  };
  recommendOwlOptions: OwlOptions = {
    loop:true,
      margin:24,
      nav:false,
      dots: false,
      autoplay:true,
      center: true,
      smartSpeed: 2000,
      responsive:{
        0:{
          items:1
        },
        
        767:{
          items:1
        },
        992:{
          items:3
        },
        1400:{
          items:3
        }
      }
  };
  imageOwlOptions: OwlOptions = {
    loop:true,
    margin:27,
    nav:true,
    dots:true,
    smartSpeed: 2000,
    autoplay:false,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive:{
      0:{
        items:1
      },				
      550:{
        items:1
      },
      768:{
        items:1
      },
      1000:{
        items:1
      }
    }
  };
  public selectedValue1!: string;
  public selectedValue2!: string;
  public selectedValue3!: string;
  selectedList1: data[] = [
    { value: 'Cruiser' },
    { value: 'Scooters' },
    
  ];
  selectedList2: data[] = [
    { value: 'KTM 300' },
    { value: 'KTM RC 390' },
    
  ];
  selectedList3: data[] = [
    { value: 'Newyork' },
    { value: 'Los Angeles' },
    
  ];
  carimagesliderOwlOptions: OwlOptions = {
    loop:true,
    margin:24,
    nav:true,
    dots: true,
    autoplay:false,
    smartSpeed: 2000,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      
      550:{
        items:1
      },
      700:{
        items:2
      },
      1000:{
        items:6
      },
      1200:{
        items:6
      }
    }
  };
  // public slideConfig = {
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
   
    
  // };
  public slideConfig2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.testimonial-slider',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    
  };
  BrandsliderOwlOptions: OwlOptions = {
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
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
        items:7
      },
      1200:{
        items:7
      }
    }
  };
  carbrandOwlOptions: OwlOptions = {
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      
      550:{
        items:1
      },
      700:{
        items:2
      },
      1000:{
        items:7
      },
      1200:{
        items:7
      }
    }
  };
  public ngAfterViewInit(): void{
    window.dispatchEvent(new Event('resize'))
  }
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    asNavFor: '.testimonial-thumbnails'
  };

  thumbnailConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.testimonial-slider',
    focusOnSelect: true
  };
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  public isClassAdded: boolean[] = [false];








searhProductData(
  productName: string = '',
  brandName: string = '',
  category: string = '',
  subCategory: string = '',
  superSubCategory: string = '',
  productType: string = '',
  concern: string = ''
) {
  const payload = {
    productName,
    brandName,
    category,
    subCategory,
    superSubCategory,
    productType,
    concern
  };

  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value);
    }
  });

  this.commonService.searhProductData(formData).subscribe({
    next: (res: any) => {
      if (res.status === 'true') {
        // ✅ Redirect based on filter
        this.router.navigate([this.routes.brandsProducts], {
          queryParams: payload   // filters as query params
        });
        //this.activeCategory = null; 
      }
    },
    error: (err: any) => {
      console.error(err);
    }
  });
}

}
