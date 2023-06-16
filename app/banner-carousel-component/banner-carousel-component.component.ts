import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-banner-carousel-component',
  templateUrl: './banner-carousel-component.component.html',
  styleUrls: ['./banner-carousel-component.component.css']
})
export class BannerCarouselComponentComponent implements OnInit{
  ngOnInit(): void {
    $(document).ready(() => {
      $('.Modern-Slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 1,
            nav: false
          },
          1000: {
            items: 1,
            nav: false,
            loop: false
          }
        }
      });
    });
  }
  }


