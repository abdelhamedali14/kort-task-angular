import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarsoulComponent } from './components/carsoul/carsoul.component';
import { HomeComponent } from './components/home/home.component';
import { ArriveLatestComponent } from './components/arrive-latest/arrive-latest.component';
import { ShopingLatestComponent } from './components/shoping-latest/shoping-latest.component';
import { ProductComponent } from './components/product/product.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { VisitedProductComponent } from './components/visited-product/visited-product.component';
import { RatingComponent } from './components/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { MainContainerComponent } from './components/MainContainer/MainContainer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    CarsoulComponent,
    HomeComponent,
    ArriveLatestComponent,
    ShopingLatestComponent,
    ProductComponent,
    FavouriteComponent,
    VisitedProductComponent,
    RatingComponent,
    MainContainerComponent
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
