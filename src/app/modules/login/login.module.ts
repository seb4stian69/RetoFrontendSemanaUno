// + ---------------------------- + First level imports + ----------------------------- + //
import { CommonModule } from '@angular/common';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { FormloginComponent } from './formlogin/formlogin.component';
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


@NgModule({

  declarations: [
    FormloginComponent
  ],

  bootstrap:[
    FormloginComponent
  ],

  imports: [
    CommonModule, InputTextModule, BrowserModule,
    BrowserAnimationsModule, InputTextModule, ButtonModule,
    FormsModule, ReactiveFormsModule
  ],

  exports:[
    FormloginComponent
  ]

})
export class LoginModule { }
