import { Component,OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { AddToCartService } from 'src/app/services/add-to-cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {

  //icon
  faMagnifyingGlass=faMagnifyingGlass

  count: number = 0;
  //instance from the serives to get the count of cart product
  constructor(private cartCount: AddToCartService) {}
 
  ngOnInit(): void {
   this.getCount()
  }
  getCount() {
    this.cartCount.getCount().subscribe((res: number) => {
      this.count = res;
      console.log(this.count);
    });
  }



}
