import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormloginComponent } from './formlogin/formlogin.component';



@NgModule({
  declarations: [
    FormloginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[FormloginComponent]
})
export class LoginModule { }
