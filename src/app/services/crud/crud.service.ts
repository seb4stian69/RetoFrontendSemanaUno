import { CreateShopCommand } from './../../common/models/CreateShopCommand.model';
// + ---------------------------- + First level imports + ----------------------------- + //
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { PaginationResponse } from 'src/app/common/models/PaginationResponse.model';
import { BuyProductCommand } from './../../common/models/BuyProductCommand.model';
import { BuysResponse } from './../../common/models/BuysResponse.model';
import { DeleteProductCommand } from './../../common/models/DeleteProductCommand.model';
import { UpdateProductCommand } from './../../common/models/UpdateProductCommand.model';
import { CreateProductCommand } from './../../common/models/CreateProductCommand.model';
import { ProductResponse } from './../../common/models/ProductResponse.model';
import { ProductsResponse } from './../../common/models/ProductsResponse.model';
import { ShopResponse } from './../../common/models/ShopResponse.model';
import { getShopByIdRoute, createShopRoute, getAllProductsByShopRoute, getProductByIdRoute, paginateProductsRoute, createProductRoute, udpdateProductRoute, deleteProductRoute, getAllBuysProductRoute, buyProductsRoute } from './../../common/utils/Routes.transacts';
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {/*void*/}

  // + ------------------------- Shop methods ------------------------- + //

  getShopById(userid: string): Observable<ShopResponse>{
    return this.http.get<ShopResponse>(getShopByIdRoute(userid));
  }

  createShop(body: CreateShopCommand):Observable<CreateShopCommand>{
    return this.http.post<CreateShopCommand>(createShopRoute, body);
  }

  // + ------------------------- Product methods ------------------------- + //

  getAllProductsByShop(shopid:string): Observable<ProductsResponse>{
    return this.http.get<ProductsResponse>(`${getAllProductsByShopRoute(shopid)}`);
  }

  paginateProducts(page:number, size:number): Observable<PaginationResponse>{
    return this.http.get<PaginationResponse>(`${paginateProductsRoute(page,size)}`);
  }

  getProductById(shopid:string, productid:string): Observable<ProductResponse>{
    return this.http.get<ProductResponse>(`${getProductByIdRoute(shopid,productid)}`);
  }

  createProduct(body: CreateProductCommand): Observable<CreateProductCommand>{
    return this.http.post<CreateProductCommand>(createProductRoute, body);
  }

  udpdateProduct(body: UpdateProductCommand): Observable<UpdateProductCommand>{
    return this.http.put<UpdateProductCommand>(udpdateProductRoute, body);
  }

  deleteProduct(body: DeleteProductCommand): Observable<DeleteProductCommand>{
    return this.http.post<DeleteProductCommand>(deleteProductRoute, body);
  }

  // + ------------------------- Product methods ------------------------- + //

  getAllBuysProduct(): Observable<BuysResponse>{
    return this.http.get<BuysResponse>(getAllBuysProductRoute);
  }

  buyProducts(body: BuyProductCommand): Observable<BuyProductCommand>{
    return this.http.post<BuyProductCommand>(buyProductsRoute, body);
  }

}
