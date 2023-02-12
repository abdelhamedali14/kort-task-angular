import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { DataContainerService } from 'src/app/services/data-container.service';
@Component({
  selector: 'app-shoping-latest',
  templateUrl: './shoping-latest.component.html',
  styleUrls: ['./shoping-latest.component.scss']
})
export class ShopingLatestComponent {
   faRightLeft=faRightLeft
  productList: Array<Product> = [];
  constructor(private allproduct: DataContainerService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.allproduct.getVisitedProduct().subscribe((res) => (this.productList = res));
      
      
  }

}
