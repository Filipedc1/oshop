import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    AdminRoutingModule,
    MatPaginatorModule,
    SharedModule
  ]
})
export class AdminModule { 
  static forRoot() {
    return {
      ngModule: AdminModule,
      providers: [
        AdminAuthGuard
      ]
    };
  }
}
