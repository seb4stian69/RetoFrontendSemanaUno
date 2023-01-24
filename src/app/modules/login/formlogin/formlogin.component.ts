// + ---------------------------- + First level imports + ----------------------------- + //
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// + ---------------------------- + Second level imports + ---------------------------- + //
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import swal from 'sweetalert';


@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.scss']
})
export class FormloginComponent{

  // Atributos de clase
  formInicial: FormGroup;
  @Output() formEmmiter:EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Input() isSearchingUser: boolean = false;

  // Constructor
  constructor() {
    this.formInicial = new FormGroup({
      user: new FormControl()
    })
  }

  // Acciones
  onPressLogin():void{

    let conditions:boolean = this.formInicial.value.user == undefined || this.formInicial.value.user == null || this.formInicial.value.user.trim() == "";

    if(conditions){

      swal({
        title: "No ingreso ningun dato",
        text: "Debe ingresar un usuario para poder ingresar a la tienda, usa los sugeridos en la barra de texto",
        icon: "error",
        closeOnClickOutside:true,
        timer: 5000
      })

    }else{
      this.formEmmiter.emit(this.formInicial);
    }

  }

}
