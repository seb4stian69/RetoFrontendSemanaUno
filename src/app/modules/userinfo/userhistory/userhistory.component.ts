import { BuysResponse } from './../../../common/models/BuysResponse.model';
import { UserinfoService } from './../../../services/userinfo/userinfo.service';
import { Router } from '@angular/router';
// + ---------------------------- + First level imports + ----------------------------- + //
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { CrudService } from './../../../services/crud/crud.service';
// + ---------------------------- + Thirds level imports + ---------------------------- + //


@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./userhistory.component.scss']
})
export class UserhistoryComponent implements OnInit{

  compras!:BuysResponse[];

  comprasView: any = [];

  constructor(private $service: UserinfoService, private router: Router){}

  ngOnInit(): void {

    let number = JSON.parse(sessionStorage.getItem("UserLogged")!).uuid.number;

    this.$service.getUserBuys(number).subscribe(data=>{

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

  goToShop(){
    this.router.navigate(['/shop']);
  }

  logout(){
    sessionStorage.removeItem("UserLogged")
    this.router.navigate(['/login']);
  }

}
