import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  items = ['الرئيسية', ' قائمة الأمنيات ', 'تواصل معنا ', 'من نحن'];
  //fontAwsome icons
  faChevronDown = faChevronDown;
  faBars = faBars;
  //flags for dropDown
  isShown: boolean = false;
  isDropDown: boolean = false;
  burgerMenu() {
    this.isDropDown = !this.isDropDown;
  }
  ngOnInit(): void {}
  
  DropDown() {
    this.isShown = !this.isShown;
  }
}
