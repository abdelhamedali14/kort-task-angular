import { Component, Input } from '@angular/core';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/interfaces/product';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
@Component({
  selector: 'app-visited-product',
  templateUrl: './visited-product.component.html',
  styleUrls: ['./visited-product.component.scss'],
})
export class VisitedProductComponent {
  @Input() product!: Product;
  faRightLeft = faRightLeft;

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
}
