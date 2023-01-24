// + ---------------------------- + First level imports + ----------------------------- + //
import {NgModule}      from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { FormcrudComponent } from './formcrud/formcrud.component';
import { CrudService } from './../../services/crud/crud.service';
import { SocketService } from './../../services/socket/socket.service';
import { TdcomponentComponent } from './tdcomponent/tdcomponent.component';
// + ---------------------------- + Thirds level imports + ---------------------------- + //

@NgModule({
  declarations: [
    FormcrudComponent,
    TdcomponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    BrowserAnimationsModule, RouterModule, CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    SocketService, CrudService
  ],
  exports:[
    FormcrudComponent
  ]
})
export class CrudModule { }
