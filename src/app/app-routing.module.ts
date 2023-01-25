import { UserhistoryComponent } from './modules/userinfo/userhistory/userhistory.component';
import { ShoppingcartComponent } from './modules/userinfo/shoppingcart/shoppingcart.component';
import { LoginuserGuard } from './guards/loginuser.guard';
import { ShopComponent } from './modules/userinfo/shop/shop.component';
// + ---------------------------- + First level imports + ----------------------------- + //
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { HistoryComponent } from './pages/history/history.component';
import { LoginGuard } from './guards/login.guard';
import { CrudComponent } from './pages/crud/crud.component';
import { LoginComponent } from './pages/login/login.component';
// + ---------------------------- + Thirds level imports + ---------------------------- + //


const routes: Routes = [

  // This part not need to pass the control sessions guards

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  // This part need to pass the control sessions guards

  {
    path:'crudproducts',
    component: CrudComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'shop',
    component: ShopComponent,
    canActivate: [LoginuserGuard]
  },
  {
    path:'shop/cart',
    component: ShoppingcartComponent,
    canActivate: [LoginuserGuard]
  },
  {
    path:'shop/history',
    component: UserhistoryComponent,
    canActivate: [LoginuserGuard]
  },
  {
    path:'history',
    component: HistoryComponent,
    canActivate: [LoginGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
