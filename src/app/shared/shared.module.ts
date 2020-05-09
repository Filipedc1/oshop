import { CustomFormsModule } from 'ng2-validation';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuard } from './services/auth-guard.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { AppRoutingModule } from 'app/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    MatTableModule,
    MatPaginatorModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    CustomFormsModule,
    MatTableModule,
    MatPaginatorModule,
    AppRoutingModule,
    NgbModule,
    CommonModule
  ]
  // providers: [
  //   UserService,
  //   AuthGuard,
  //   CategoryService,
  //   ProductService,
  //   ShoppingCartService,
  //   OrderService
  // ]
})
export class SharedModule { 
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        UserService,
        AuthGuard,
        CategoryService,
        ProductService,
        ShoppingCartService,
        OrderService
      ]
    };
  }
}
