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
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    FormcrudComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    BrowserAnimationsModule, RouterModule, CommonModule,
    ReactiveFormsModule, TableModule, ProgressSpinnerModule
  ],
  providers: [
    SocketService, CrudService
  ],
  exports:[
    FormcrudComponent
  ]
})
export class CrudModule { }
