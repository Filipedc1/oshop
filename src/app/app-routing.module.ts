import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';


const routes: Routes = [
  { path: '',               component: ProductsComponent },
  { path: 'login',          component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
