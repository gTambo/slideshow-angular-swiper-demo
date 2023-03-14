
// slides.component.ts

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {A11y, Mousewheel, Navigation, Pagination, SwiperOptions} from 'swiper';

@Component({
  selector: 'corp-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlidesComponent implements OnInit {

  slides$ = new BehaviorSubject<string[]>(['']);

  constructor() {}

  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 100 }).map((el, index) => `Slide ${index + 1}`)
    );
  }

  public config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    autoHeight: true,
    spaceBetween: 20,
    navigation: true,
    // {
    //   nextEl: '.swiper-btn-next',
    //   prevEl: '.swiper-btn-prev',
    // },
    pagination: {clickable: true, dynamicBullets: true, },
    slidesPerView: 3,
    centeredSlides: true,
    breakpoints: {
      400: {
        slidesPerView: "auto",
        centeredSlides: false
      },
    }
  }
}