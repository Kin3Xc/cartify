import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';

import { ShopItemListComponent } from './shop/shop-item-list/shop-item-list.component';
import { ShopItemDetailComponent } from './shop/shop-item-detail/shop-item-detail.component';
import { ItemCartComponent } from './cart/cart-item-list.component';
import { FormComponent } from './shop/shop-item-form/shop-item-form.component';
import { ShopItemFilterPipe } from './shop/shop-item-list//shop-item-filter.pipe';

import { AuthService } from './shared/auth.service';
import { CartService } from './shared/cart.service';
import { ShopService } from './shared/shop.service';
import { AppErrorHandler } from './error/app-error-handler';

import { AppRoutingModule } from './app-routing.module';
import { CalendarModule, RatingModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent, ShopItemListComponent, ShopItemDetailComponent, ItemCartComponent, ShopItemFilterPipe, FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    CalendarModule,
    RatingModule
  ],
  providers: [
    AuthService,
    ShopService,
    CartService,
    Title,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
