
// slides.component.ts

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import {A11y, Mousewheel, Navigation, Pagination, SwiperOptions} from 'swiper';
import { SwiperDirective } from '../swiper.directive';

// import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

// SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

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
      Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`)
    );
  }

  public config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    autoHeight: true,
    spaceBetween: 100,
    navigation: true,
    pagination: {clickable: true, dynamicBullets: true},
    slidesPerView: 1,
    centeredSlides: false,
    breakpoints: {
      400: {
        slidesPerView: "auto",
        centeredSlides: false
      },
    }
  }
}