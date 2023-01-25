// + ---------------------------- + First level imports + ----------------------------- + //
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { UserinfoService } from './../../../services/userinfo/userinfo.service';
import { CrudService } from './../../../services/crud/crud.service';
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import Swal from 'sweetalert2';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{

  products: Array<any> = [];
  shopID: string = "shopOne";
  maxIdNumber!: number;

  cart: Map<string, number> = new Map(JSON.parse(localStorage.getItem('cart')!));

  constructor(private $service: CrudService, private $userservice: UserinfoService, private router:Router) {
  }

  ngOnInit() {

    this.getProducts()

  }

  getProducts(){
    this.$service.getAllProductsByShop(this.shopID).subscribe(data=>{

      const keys = Object.keys(data.products);

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

  addToCart(product:any){

    Swal.fire({
      title: '¿Cuantos deseas añadir?',
      input: 'text',
      preConfirm: (qty)=>{
        this.cart.set(product.productID.uuid, qty)
        localStorage.setItem('cart', JSON.stringify(Array.from(this.cart)));
      }
    })

  }

  goToHistory(){
    this.router.navigate(['/shop/history']);
  }

  goToCart(){
    this.router.navigate(['/shop/cart']);
  }

  logout(){
    sessionStorage.removeItem("UserLogged")
    this.router.navigate(['/login']);
  }

}
