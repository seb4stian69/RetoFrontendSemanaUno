import { UpdateProductCommand } from './../../../common/models/UpdateProductCommand.model';
// + ---------------------------- + First level imports + ----------------------------- + //
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { CrudService } from './../../../services/crud/crud.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SocketService } from './../../../services/socket/socket.service';
import { DeleteProductCommand } from './../../../common/models/DeleteProductCommand.model';
import { CreateProductCommand } from './../../../common/models/CreateProductCommand.model';
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import { v4 as autoUid } from 'uuid';
import Swal from 'sweetalert2'

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
  maxIdNumber!: number;
  isEdited:boolean = false;
  product:any;
  productupdateid!:string;

  // Inputs value
  formInicial: FormGroup;
  inputNombre!:string;
  inputPrecio!:string;
  inputEnInventario!:string;
  inputDisponible!:string;
  inputMax!:string;
  inputMin!:string;

  timerInterval:any;

  // Constructor
  constructor(public $service: CrudService, private router: Router, private $ws: SocketService){

    this.formInicial = new FormGroup({
      nombre: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      inventario: new FormControl('', Validators.required),
      disponible: new FormControl('', Validators.required),
      max: new FormControl('', Validators.required),
      min: new FormControl('', Validators.required),
      productid: new FormControl()
    })

  }

  // Al iniciar
  ngOnInit() {

    this.getProducts();

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

      console.log(this.product)

      let body: UpdateProductCommand = {
        shopID: this.shopID,
        productID: this.formInicial.value.productid,
        name: this.formInicial.value.nombre,
        inINventory: this.formInicial.value.inventario,
        enabled: (this.formInicial.value.disponible=="true"?true:false),
        max: this.formInicial.value.max,
        min: this.formInicial.value.min,
        price:  this.formInicial.value.precio
      }

      console.log(this.formInicial.value.inventario)

      this.$service.udpdateProduct(body).subscribe(()=>{ setTimeout(() => {

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se ha actualizado el producto',
          showConfirmButton: false,
          timer: 1500
        });

        this.getProducts()
        this.fillInputs(null);
      }, 50); });

    }else{

      let body: CreateProductCommand = {
        shopID: this.shopID,
        productID: `product${this.maxIdNumber+1}`,
        name: this.formInicial.value.nombre,
        inINventory: this.formInicial.value.inventario,
        enabled: (this.formInicial.value.disponible=="true"?true:false),
        max: this.formInicial.value.max,
        min: this.formInicial.value.min,
        price:  this.formInicial.value.precio
      }

      this.$service.createProduct(body).subscribe(()=>{ setTimeout(() => {

        this.getProducts()

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se ha creado el producto',
          showConfirmButton: false,
          timer: 1500
        });

        this.fillInputs(null);

      }, 50); });

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

  getProducts(){
    this.$service.getAllProductsByShop(this.shopID).subscribe(data=>{

      this.maxIdNumber = Object.keys(data.products).length;
      const keys = Object.keys(data.products);
      console.log()

      this.products = [];
      let numbersKeys = [];
      let numbersKeysInts: Array<number> = [];

      for(let key of keys){
        this.products.push(data.products[key]);
        numbersKeys.push(key.split("product")[1]);
      }

      numbersKeys.forEach(key =>{
        numbersKeysInts.push(parseInt(key))
      })

      this.maxIdNumber = Math.max(...numbersKeysInts)

    })
  }

  fillInputs(product:any|null){

    this.product = product;

    if(product==null){
      this.productupdateid = ''
      this.inputNombre = ''
      this.inputPrecio = ''
      this.inputEnInventario = ''
      this.inputDisponible = ''
      this.inputMax = ''
      this.inputMin = ''
    }else{
      this.productupdateid = product.productID.uuid;
      this.inputNombre = product.name.name
      this.inputPrecio = product.price.quantity
      this.inputEnInventario = product.inInventory.quantity
      this.inputDisponible = product.isEnabled.enable
      this.inputMax = product.max.quantity
      this.inputMin = product.min.quantity
    }

  }

  deleteProduct(productid:string){

    Swal.fire({
      title: '¿Estas seguro?',
      text: "No podras deshacer esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borralo!'
    }).then((result) => {
      if (result.isConfirmed) {

        let body:DeleteProductCommand = {
          shopID: this.shopID,
          productId: productid
        }

        this.$service.deleteProduct(body).subscribe(()=>{ setTimeout(() => {
          this.getProducts()
        }, 100); });

        Swal.fire({
          title: 'Eliminacion en progreso',
          html: 'Espere mientras se elimina el producto',
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer()!.querySelector('b')
            this.timerInterval = setInterval(() => {
            }, 100)
          },
          willClose: () => {
            clearInterval(this.timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
          }
        })

      }else{

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'No se ha eliminado el producto',
          showConfirmButton: false,
          timer: 1500
        });

      }
    })

  }

  goToHistory(){
    this.router.navigate(['/history']);
  }

  logout(){
    sessionStorage.removeItem("UserLogged")
    this.router.navigate(['/login']);
  }

}
