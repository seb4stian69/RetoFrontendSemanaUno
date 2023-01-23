import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';



@NgModule({
  declarations: [
    ShopComponent,
    UserhistoryComponent,
    ShoppingcartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserinfoModule { }
