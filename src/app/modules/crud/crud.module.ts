// + ---------------------------- + First level imports + ----------------------------- + //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { FormcrudComponent } from './formcrud/formcrud.component';
// + ---------------------------- + Thirds level imports + ---------------------------- + //


@NgModule({
  declarations: [
    FormcrudComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CrudModule { }
