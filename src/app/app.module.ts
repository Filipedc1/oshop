import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';

import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { ShoppingRoutingModule } from './shopping/shopping-routing.module';
import { ShoppingModule } from './shopping/shopping.module';

// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    AppRoutingModule,
    AdminRoutingModule,
    ShoppingRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSortModule,
    BrowserAnimationsModule
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent },
    //   { path: 'products', component: ProductsComponent },
    //   { path: 'shopping-cart', component: ShoppingCartComponent },
    //   { path: 'check-out', component: CheckOutComponent },
    //   { path: 'order-success', component: OrderSuccessComponent },
    //   { path: 'login', component: LoginComponent },
    //   { path: 'admin/products', component: AdminProductsComponent },
    //   { path: 'admin/orders', component: AdminOrdersComponent }
    // ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
