import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { DataContainerService } from 'src/app/services/data-container.service';
@Component({
  selector: 'app-arrive-latest',
  templateUrl: './arrive-latest.component.html',
  styleUrls: ['./arrive-latest.component.scss'],
})
export class ArriveLatestComponent implements OnInit {
  faRightLeft = faRightLeft;
  productList: Array<Product> = [];
  // instance from the srvices to load the data
  constructor(private allproduct: DataContainerService) {}
//get products on page load
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.allproduct
      .getLatestProduct()
      .subscribe((res) => (this.productList = res));
  }
}
