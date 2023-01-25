// + ---------------------------- + First level imports + ----------------------------- + //
import {NgModule}      from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { ShopComponent } from './shop/shop.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
// + ---------------------------- + Thirds level imports + ---------------------------- + //

@NgModule({
  declarations: [
    ShopComponent,
    UserhistoryComponent,
    ShoppingcartComponent
  ],
  imports: [
    CommonModule,BrowserModule,ReactiveFormsModule,
    FormsModule, HttpClientModule, BrowserAnimationsModule,
    RouterModule
  ]
})
export class UserinfoModule { }
