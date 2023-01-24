// + ---------------------------- + First level imports + ----------------------------- + //
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
// + ---------------------------- + Second level imports + ---------------------------- + //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { LoginComponent } from './pages/login/login.component';
import { CrudComponent } from './pages/crud/crud.component';
import { HistoryComponent } from './pages/history/history.component';
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { ShopComponent } from './pages/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrudComponent,
    HistoryComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, InputTextModule,
    LoginModule,CommonModule, InputTextModule,
    BrowserAnimationsModule, ButtonModule, FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
