import { Product } from './../../../common/models/ShopResponse.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tdcomponent',
  templateUrl: './tdcomponent.component.html',
  styleUrls: ['./tdcomponent.component.scss']
})
export class TdcomponentComponent {

  @Input() products!: Array<any>;
  @Output() productEmmiter:EventEmitter<object> = new EventEmitter<object>();
  @Output() productIDEmmiter:EventEmitter<string> = new EventEmitter<string>();

  editProduct(product:any){
    this.productEmmiter.emit(product);
  }

  deleteProduct(id:string){
    this.productIDEmmiter.emit(id);
  }

}
