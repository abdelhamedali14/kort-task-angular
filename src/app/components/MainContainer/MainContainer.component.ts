import { Component, OnInit } from '@angular/core';
import { SlideInterface } from 'src/app/interfaces/slide';

@Component({
  selector: 'app-MainContainer',
  templateUrl: './MainContainer.component.html',
  styleUrls: ['./MainContainer.component.css']
})
export class MainContainerComponent implements OnInit {

  slides: SlideInterface[] = [
    { url: "../assets/imgs/Image 22.png", title: 'cover' },
    { url: "../assets/imgs//2593108.png", title: 'cover' },
    { url: "../assets/imgs/online-shopping-with-smartphone-shop-shopping-cart_269039-853.avif", title: 'cover' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
