import { DatePipe } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import {  testimonials, thumbnails1 } from 'src/app/shared/services/model/model';
interface data {
  value: string;
}

@Component({
  selector: 'app-listing-grid',
  templateUrl: './listing-grid.component.html',
  styleUrls: ['./listing-grid.component.css'],
})
export class ListingGridComponent implements AfterViewInit{
   public routes = routes
  public thumbnails1: thumbnails1[] = [];
  public testimonials: testimonials[] = [];
 
  constructor(private data: DataService, private datePipe: DatePipe) {
    this.testimonials = this.data.testimonials;
    this.thumbnails1 = this.data.thumbnails1;
    
    
  }
  brands = [
    { name: 'add', logo: 'assets/img/brand/bellaluna.png', link: '/brands/lakme' },
    { name: 'bio-ones', logo: 'assets/img/brand/bio-ones.png', link: '/brands/maybelline' },
    { name: 'dr.-blue', logo: 'assets/img/brand/dr.-blue.png', link: '/brands/face-shop' },
    { name: 'estilo', logo: 'assets/img/brand/estilo.png', link: '/brands/innisfree' },
    { name: 'glossys', logo: 'assets/img/brand/glossys.png', link: '/brands/innisfree' },
    { name: 'Lalachuu', logo: 'assets/img/brand/lalachuu.png', link: '/brands/innisfree' },
    { name: 'add', logo: 'assets/img/brand/medicell-bio.png', link: '/brands/innisfree' },
    { name: 'add', logo: 'assets/img/brand/OSEQUE.png', link: '/brands/innisfree' },
    { name: 'add', logo: 'assets/img/brand/TOAS.png', link: '/brands/innisfree' },
    { name: 'add', logo: 'assets/img/brand/new-brands1.png', link: '/brands/innisfree' },
   { name: 'add', logo: 'assets/img/brand/new-brands2.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands3.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands4.jpg', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands5.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands6.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands7.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands8.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands9.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands10.webp', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands11.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands12.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands13.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands14.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands15.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands16.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/new-brands17.png', link: '/brands/innisfree' },
{ name: 'add', logo: 'assets/img/brand/Pure Skin.png', link: '/pages/pureskin' },
{ name: 'add', logo: 'assets/img/brand/wol-goo.png', link: '/pages/wolgoo' },
{ name: 'add', logo: 'assets/img/brand/fabyou logo.webp', link: '/pages/fabyou' },
{ name: 'add', logo: 'assets/img/brand/rataplan logo.webp', link: '/pages/rataplan' },
  ];
   steps = [
    {
      image: 'assets/img/icons1/Place order.webp',
      title: 'Place Order',
      description: 'Explore our product selection and add items to your cart to complete your order.'
    },
    {
      image: 'assets/img/icons1/Confirm.webp',
      title: 'Confirm',
      description: 'Your personal sales consultant will be in touch to confirm and refine your order.'
    },
    {
      image: 'assets/img/icons1/Payment.webp',
      title: 'Payment',
      description: 'Payment should be completed once you receive the Proforma Invoice (PI).'
    },
    {
     image: 'assets/img/icons1/Packing and shipping.webp',
      title: 'Packing & Shipping',
      description: 'Upon successful payment, we handle packaging and arrange delivery of your order.'
    }
  ];

  features = [
    {
      icon: 'clock',
      title: '24/7 Access',
      description: 'Real-time inventory updates and order tracking anytime, anywhere with our cutting-edge platform.',
      colorClass: 'primary'
    },
    {
      icon: 'globe-americas',
      title: 'Global Network',
      description: '500+ distribution channels across 60+ countries ensuring seamless worldwide delivery.',
      colorClass: 'success'
    },
    {
      icon: 'rocket',
      title: 'Growth Partners',
      description: 'Strategic partnerships with top influencers and brands to accelerate your business growth.',
      colorClass: 'accent'
    },
    {
      icon: 'language',
      title: 'Multilingual Support',
      description: 'Communicate effortlessly in 9 languages with our dedicated international team.',
      languages: ['Korean', 'English', 'Chinese', 'Japanese', 'Arabic', 'Spanish'],
      colorClass: 'warning'
    }
  ];

  mostLovedProducts = [
  {
    image: 'assets/img/product/fab-you-4.webp',
    title: 'Ceramide Panthenol Barrier Support Toner',
    brandname:'Fab you',
    price: 1580,
    oldPrice: null,
    discount: null
  },
  {
    image: 'assets/img/product/fab-you-5.webp',
    title: 'Ceramide Panthenol Barrier Support Serum',
    brandname:'Fab you',
    price: 1535,
    oldPrice: null,
    discount: null,
  },
  {
     title: 'Minari Calming Poreless Sunscreen 1+1',
     brandname:'Ratplan',
    price: 1925,
    oldPrice: null,
    discount: null,
    image: 'assets/img/product/ratplan-4.jpg'
  },
  {
    image: 'assets/img/product/fab-you3.webp',
    title: 'KRice Mask Cleanser',
    brandname:'Fab you',
    price: 1407,
    oldPrice: null,
    discount: null,
  },
  {
    image: 'assets/img/product/ratplan-6.jpg',
    title: 'Donghae Deep Moisturizing Cream 1+1',
    brandname:'Ratplan',
    price: 2000,
    oldPrice: null,
    discount: null,
  }
];

  newArrivalProducts = [
  {
    image: 'assets/img/product/fab-you1.webp',
    title: 'Retinol Peptide Youthful Serum',
    brandname:'febyou',
    price: 1596,
    oldPrice: null,
    discount: null
  },
  {
    image: 'assets/img/product/product-2.avif',
    title: 'Plum Simply Bright 2% Niacinamide Face Wash With',
    brandname:'Plum',
    price: 299,
    oldPrice: null,
    discount: null,
  },
  {
    image: 'assets/img/product/fab-you2.webp',
    title: 'Rice Glow Foam Toner',
    brandname:'febyou',
    price: 1191,
    oldPrice: null,
    discount: null,
  },
  {
    image: 'assets/img/product/fab-you3.webp',
    title: 'KRice Mask Cleanser',
    brandname:'febyou',
    price: 1407,
    oldPrice: null,
    discount: null,
  },
  {
    image: 'assets/img/product/ratplan-6.jpg',
    title: 'Donghae Deep Moisturizing Cream 1+1',
    brandname:'Ratiplan',
    price: 2000,
    oldPrice: null,
    discount: null,
  }
];

  promotionProducts = [
  {
    image: 'assets/img/product/rataplan1.jpg',
    title: '[Limited quantity] Minari Soothing Sunscreen Planning (50ml+20ml)',
    brandname:'Rataplan',
    price: 1155 ,
    oldPrice: null,
    discount: null
  },
  {
    image: 'assets/img/product/ratplan2.jpg',
    title: 'Minari Calming Sunscreen 1+1',
    brandname:'Rataplan',
    price: 1925,
    oldPrice: null,
    discount: null,
  },
  {
    image: 'assets/img/product/ratplan3.jpg',
    title: 'Minari Jinjeong No Sebum Sun Stick 1+1',
    brandname:'Rataplan',
    price: 1925,
    oldPrice: null,
    discount: null,
  },
  {
    image: 'assets/img/product/fab-you-5.webp',
    title: 'Ceramide Panthenol Barrier Support Serum',
    brandname:'Fabyou',
    price: 1535,
    oldPrice: null,
    discount: null,
  },
  {
    image: 'assets/img/product/ratplan-6.jpg',
    title: 'Donghae Deep Moisturizing Cream 1+1',
    brandname:'Rataplan',
    price: 2000,
    oldPrice: null,
    discount: null,
  }
];
  secondsection: OwlOptions = {
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    autoplay:true,
    smartSpeed: 1000,
    items:1,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      
      550:{
        items:1
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
  firstsecOptions: OwlOptions = {
    loop:true,
    margin:20,
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
        items:5
      },
      1000:{
        items:6
      },
      1200:{
        items:7
      },

    },
  };
  categorysec: OwlOptions = {
    loop:true,
    margin:24,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
      0:{
        items:1
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

  TopBrands: OwlOptions = {
   loop:true,
    margin:20,
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
    NewArrival: OwlOptions = {
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
  pramotionsec: OwlOptions = {
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
}