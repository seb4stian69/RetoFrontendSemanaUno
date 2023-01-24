// + ---------------------------- + First level imports + ----------------------------- + //
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { CrudService } from './../../../services/crud/crud.service';
import { FormGroup,FormControl } from '@angular/forms';
import { SocketService } from './../../../services/socket/socket.service';
import { DeleteProductCommand } from './../../../common/models/DeleteProductCommand.model';
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import { v4 as autoUid } from 'uuid';

@Component({
  selector: 'app-formcrud',
  templateUrl: './formcrud.component.html',
  styles: [`
    :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
    }
` ],
  styleUrls: ['./formcrud.component.scss']
})
export class FormcrudComponent implements OnInit {

  // Websocket uuid
  uuid:string = autoUid();

  // Atributos de control de vistas
  products: Array<any> = [];
  shopID:string = "shopOne";
  quantityOfProduct!: number;
  isEdited:boolean = false;

  // Inputs value
  formInicial: FormGroup;
  inputNombre!:string;
  inputPrecio!:string;
  inputEnInventario!:string;
  inputDisponible!:string;
  inputMax!:string;
  inputMin!:string;

  // Constructor
  constructor(public $service: CrudService, private router: Router, private $ws: SocketService){

    this.formInicial = new FormGroup({
      user: new FormControl(),
      pass: new FormControl()
    })

  }

  // Al iniciar
  ngOnInit() {

    this.$service.getAllProductsByShop(this.shopID).subscribe(data=>{

      this.quantityOfProduct = Object.keys(data.products).length;

      for (let i=1; i<=this.quantityOfProduct; i++) {
        this.products.push(data.products[`product${i}`])
      }

    })

    this.$ws.conection(this.uuid).subscribe({
      next: (event: any) => console.log(event),
      error: (error: any) => console.log(error),
      complete: () => console.log('completado'),
    });

  }

  // Metodos de control de vistas

  submmit(){

    let type:string = document.getElementById("submitButton")!.innerText

    if(type=="Editar"){

      this.isEdited = false;
      alert("Producto editado")
      this.fillInputs(null);

    }else{
      alert("Producto agregado: "+`product${this.quantityOfProduct+1}`)
    }

  }

  editProduct(product:any){
    this.isEdited = true;
    this.fillInputs(product);
  }

  cancelEdit(){
    this.isEdited = false;
    this.fillInputs(null);
  }

  fillInputs(product:any|null){

    if(product==null){
      this.inputNombre = ''
      this.inputPrecio = ''
      this.inputEnInventario = ''
      this.inputDisponible = ''
      this.inputMax = ''
      this.inputMin = ''
    }else{
      this.inputNombre = product.name.name
      this.inputPrecio = product.price.quantity
      this.inputEnInventario = product.inInventory.quantity
      this.inputDisponible = product.isEnabled.enable
      this.inputMax = product.max.quantity
      this.inputMin = product.min.quantity
    }

  }

  deleteProduct(productid:string){

    let body:DeleteProductCommand = {
      shopID: this.shopID,
      productId: productid
    }

    this.$service.deleteProduct(body).subscribe(()=>{
      this.ngOnInit();
    });

  }

  goToHistory(){
    this.router.navigate(['/crudproducts/history']);
  }

}
