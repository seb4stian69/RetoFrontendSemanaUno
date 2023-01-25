import { Router } from '@angular/router';
import { CrudService } from './../../services/crud/crud.service';
import { BuysResponse } from './../../common/models/BuysResponse.model';
// + ---------------------------- + First level imports + ----------------------------- + //
import { Component, OnInit } from '@angular/core';
// + ---------------------------- + Second level imports + ---------------------------- + //
// + ---------------------------- + Thirds level imports + ---------------------------- + //


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  compras!:BuysResponse[];

  comprasView: any = [];

  constructor(private $service: CrudService, private router: Router){}

  ngOnInit(): void {

    this.$service.getAllBuysProduct().subscribe(data=>{

      this.compras=data;

      data.forEach(d=>{

        let productsKeys: Array<string[]> = [];
        let productsSend:any=[];
        const Keys = Object.keys(d.productsPurchased);

        productsKeys.push(Keys);

        productsKeys.forEach(keys=>{
          keys.forEach(key=>{
            productsSend.push(`ID del producto - [${key}] | Cantidad - [${d.productsPurchased[key]}]`)
          })
        })

        let objectPush = {
          shopID: d.shopID,
          clientName: `${d.clientName.name} ${d.clientName.lastName}`,
          idType: d.idType,
          idClient: d.idClient,
          date: d.date,
          productsPurchased: productsSend
        }

        this.comprasView.push(objectPush)

      })


    })
  }

  gotToCrud(){
    this.router.navigate(['/crudproducts']);
  }

  logout(){
    sessionStorage.removeItem("UserLogged")
    this.router.navigate(['/login']);
  }

}

