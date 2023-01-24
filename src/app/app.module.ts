// + ---------------------------- + First level imports + ----------------------------- + //
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
// + ---------------------------- + Second level imports + ---------------------------- + //
import { CrudModule } from './modules/crud/crud.module';
import { LoginModule } from './modules/login/login.module';
import { LoginComponent } from './pages/login/login.component';
import { CrudComponent } from './pages/crud/crud.component';
import { HistoryComponent } from './pages/history/history.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { ReloadcomponentDirective } from './directives/reloadcomponent.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrudComponent,
    HistoryComponent,
    ShopComponent,
    ReloadcomponentDirective
  ],
  imports: [
    BrowserModule, AppRoutingModule, InputTextModule,
    LoginModule,CommonModule, InputTextModule,
    BrowserAnimationsModule, ButtonModule, FormsModule,
    HttpClientModule, CrudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
