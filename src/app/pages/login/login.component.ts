// + ---------------------------- + First level imports + ----------------------------- + //
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { UserinfoService } from './../../services/userinfo/userinfo.service';
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isSearchingUser: boolean = false;

  constructor(private $service: UserinfoService, private router: Router) {/*void*/}

  login(event: FormGroup){

    this.isSearchingUser = true;

    this.$service.verifyUser(event.value.user).subscribe(data=>{

      this.isSearchingUser = false;

      if(data!==null){

        sessionStorage.setItem("UserLogged",JSON.stringify(data));
        (data.name.lastname=="admin")?this.router.navigate(['/crudproducts']):this.router.navigate(['/shop']);

      }else{
        swal({
          title: "No se encontro un usuario",
          text: "Ingresa con otro identificador, prueba los 2 que estan en la barra de texto",
          icon: "error",
          closeOnClickOutside:true,
          timer: 5000
        })
      }

    })
  }

}
