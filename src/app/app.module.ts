import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatInputModule } from '@angular/material/input';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { NgxCarouselComponent } from './ngx-carousel/ngx-carousel.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { BlogCarouselComponent } from './blog-carousel/blog-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { RentalCarouselComponent } from './rental-carousel/rental-carousel.component';
import { SellerCarouselComponent } from './seller-carousel/seller-carousel.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { ListingsComponent } from './listings/listings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchBarComponent,
    CarouselComponent,
    CardCarouselComponent,
    BlogCarouselComponent,
    FooterComponent,
    RentalCarouselComponent,
    SellerCarouselComponent,
    PropertyDetailsComponent,
    ListingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    SlickCarouselModule,
    NgxCarouselComponent

    
  ],
  exports: [NgxCarouselComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
