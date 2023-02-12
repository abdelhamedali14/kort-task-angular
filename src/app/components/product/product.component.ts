import { Component, Input, OnInit } from '@angular/core';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interfaces/product';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  //flag to check if the procuct is exist on cart or not
  isExist: boolean = false;
  constructor(private cartCount: AddToCartService) {}

  ngOnInit(): void {}

  addTCart() {
    this.cartCount.increaseCount();
    this.product.exist = true;
  }
  removeFromCart() {
    this.cartCount.dicreaseCount();
    this.product.exist = false;
  }

  //number of rating stars
  stars: Array<number> = [1, 2, 3, 4, 5];
  //flag to detect is the rate exist or not ?
  isStar: boolean = false;

  //to ways icon
  faRightLeft = faRightLeft;
}
