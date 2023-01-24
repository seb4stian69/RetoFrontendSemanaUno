import { environment } from './../../../environments/environments';

export const getUserByIdRoute = (userid:string) => `${environment.apiUrl}/users/list/${userid}`; // Usado en userinfo.service

export const getShopByIdRoute = (shopid:string) => `${environment.apiUrl}/shop/${shopid}`; // Usado en crud.service
export const createShopRoute = `${environment.apiUrl}/shop/create`; // Usado en crud.service

export const getAllProductsByShopRoute = (shopid:string) => `${environment.apiUrl}/products/${shopid}`; // Usado en crud.service
export const paginateProductsRoute = (page:number, size:number) => `${environment.apiUrl}Products/get?page=${page}&size=${size}`; // Usado en crud.service
export const getProductByIdRoute = (shopid:string, productid:string) => `${environment.apiUrl}/products/${shopid}/${productid}`; // Usado en crud.service
export const createProductRoute = `${environment.apiUrl}/products/create`; // Usado en crud.service
export const udpdateProductRoute = `${environment.apiUrl}/product/update`; // Usado en crud.service
export const deleteProductRoute = `${environment.apiUrl}/product/delete`; // Usado en crud.service

export const getAllBuysProductRoute = `${environment.apiUrl}/buy/get`; // Usado en crud.service
export const getAllBuysProductByUserIdRoute = (userid:string) => `${environment.apiUrl}/buy/get/${userid}`; // Usado en userinfo.service
export const buyProductsRoute = `${environment.apiUrl}/buy/make`; // Usado en crud.service
