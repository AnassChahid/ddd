import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-testimonials-component',
  templateUrl: './testimonials-component.component.html',
  styleUrls: ['./testimonials-component.component.css']
})
export class TestimonialsComponent implements OnInit {

  ngOnInit(): void {
    $(document).ready(() => {
      $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: false,
            loop: false
          }
        }
      });
    });
  }
}
