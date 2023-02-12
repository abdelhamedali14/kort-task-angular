import { Component,Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {
   isChecked: boolean = false;
   faHeart=faHeart


   //check if the product is favourite or not 
  isFavourite() {
    this.isChecked=!this.isChecked
  }

}
