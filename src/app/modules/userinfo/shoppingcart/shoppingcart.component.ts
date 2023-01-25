import { BuyProductCommand } from './../../../common/models/BuyProductCommand.model';
// + ---------------------------- + First level imports + ----------------------------- + //
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { CrudService } from './../../../services/crud/crud.service';
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import Swal from 'sweetalert2';

interface viewProduct{
  name: string;
  quantity: number;
  key:string;
}

export interface Products {
  products: Map<string, number>;
}

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  productsMap:any;
  productsArray:Array<any>=[];
  shopID: string = "shopOne";
  shoppingCart: Array<viewProduct> = [];

  constructor(private $service: CrudService, private router:Router){}

  ngOnInit(): void {

    if(localStorage.getItem("cart") !== null){
      this.productsMap = new Map(JSON.parse(localStorage.getItem('cart')!));
      this.productsArray = JSON.parse(localStorage.getItem('cart')!);

      this.productsArray.forEach(element => {
        this.obtenerProductPorID(element[0], element[1]);
      });
    }else{
      this.shoppingCart=[]
    }

  }

  obtenerProductPorID(productid:string, quantity:number):void{
    this.$service.getProductById(this.shopID, productid).subscribe(data=>{

      let push:viewProduct = {
        name: data.name.name,
        quantity: quantity,
        key: data.productID.uuid
      };

      this.shoppingCart.push(push);

    })
  }

  goToShop(){
    this.router.navigate(['/shop']);
  }

  buyProducts(){

    let timestamp = Date.now();
    let date = new Date(timestamp);
    let typeid = JSON.parse(sessionStorage.getItem("UserLogged")!).uuid.type;
    let number = JSON.parse(sessionStorage.getItem("UserLogged")!).uuid.number;
    let name = JSON.parse(sessionStorage.getItem("UserLogged")!).name.firstname;
    let lastname = JSON.parse(sessionStorage.getItem("UserLogged")!).name.lastname;

    let products = this.obtenerProducts(this.productsArray)

    let body:BuyProductCommand = {
      shopID:this.shopID,
      date: date,
      idType:typeid,
      idClient:number,
      clientName:name+" "+lastname,
      products: products
    }

    console.log(products);

    if(products == null){
      Swal.fire({title:"No hay productos", icon:"error"})
    }else{
      this.$service.buyProducts(body).subscribe(()=>{
        localStorage.removeItem('cart');
        this.ngOnInit();
      });

    }

  }

  logout(){
    sessionStorage.removeItem("UserLogged")
    this.router.navigate(['/login']);
  }

  deleteObject(key:string){

    let mapOn = new Map(JSON.parse(localStorage.getItem('cart')!));
    console.log(mapOn,key);
    mapOn.delete(key)
    console.log(mapOn);
    localStorage.setItem('cart', JSON.stringify(Array.from(mapOn)));
    this.shoppingCart=[]
    this.ngOnInit();

  }

  clearCart(){
    localStorage.removeItem('cart');
    this.ngOnInit();
  }

  obtenerProducts(products: Array<any>) {

    if(products.length == 0) return null;

    return products.reduce(
      (previous, current) => ({
        ...previous,
        [current[0]]: parseInt(current[1]),
      }),
      {}
    );

  }

}
