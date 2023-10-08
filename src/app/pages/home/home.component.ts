import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  slides: any[] = [
    { image: 'assets/bh44.jpg', },
    { image: 'assets/bh55.jpg', },
    { image: 'assets/bh66.jpg', },
    //{ image: 'assets/b4.jpeg', },
    // Add more slides as needed
  ];

  currentSlideIndex = 0;
  slideWidth: number | null = null;         // Initialize slideWidth as null
  slideTransitionDuration: number = 300;    // Add slideTransitionDuration property

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const slideElement = document.querySelector('.slide');
    this.slideWidth = slideElement?.clientWidth ?? null; // Use optional chaining and nullish coalescing
    this.startAutoSlider();
  }

  startAutoSlider() {
    setInterval(() => {
      this.moveToNextSlide();
    }, 3000); // Adjust the interval (in milliseconds) for auto-slide
  }

  moveToNextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  moveToPrevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}
