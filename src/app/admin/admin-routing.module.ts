import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { NgModule } from '@angular/core';



const routes: Routes = [
  { path: 'admin/products/new',        component: ProductFormComponent,    canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/products/:productId', component: ProductFormComponent,    canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/products',            component: AdminProductsComponent,  canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/orders',              component: AdminOrdersComponent,    canActivate: [AuthGuard, AdminAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
