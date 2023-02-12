import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  cartItem: any = [];
  count: number = 0;
  private containerArray = new BehaviorSubject(this.cartItem);
  private counter = new BehaviorSubject(0);
  productsContainer = this.containerArray.asObservable();
  constructor() {}

  increaseCount() {
    this.count++;
    this.counter.next(this.count);
  }
  getCount() {
    return this.counter.asObservable();
  }
  dicreaseCount() {
    if (this.count >= 0) {
      this.count--;
      this.counter.next(this.count);
    }
  }
}
