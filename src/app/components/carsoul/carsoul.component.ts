import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SlideInterface } from 'src/app/interfaces/slide';

@Component({
  selector: 'app-carsoul',
  templateUrl: './carsoul.component.html',
  styleUrls: ['./carsoul.component.scss'],
})
export class CarsoulComponent {
  @Input() slides: SlideInterface[] = [];

  currentIndex: number = 0;
  timeoutId?: number;
  //call timer on load
  ngOnInit(): void {
    this.resetTimer();
  }
  //remove timer from the page
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  //timer to move the images every 3 seconds
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }
  // load the previous photo
  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;
    //reset the timer after every click
    this.resetTimer();
    this.currentIndex = newIndex;
  }

  // load the next photo
  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    //reset the timer after every click
    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
}
