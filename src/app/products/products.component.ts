import { ICart } from './../interfaces/icart';
import { ShoppingCartService } from './../shopping-cart.service';
import { IProduct } from './../interfaces/iproduct';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'; //switchmap allows you to switch one observable to another
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  selectedCategory;
  cart: ICart;
  subscription: Subscription;

  constructor(
    _route: ActivatedRoute, // allows us to read the route parameters passed in via the view file
    private _productService: ProductService,
    private _cartService: ShoppingCartService) 
  {
    this._productService
      .getAll()
      .pipe(switchMap(products => { 
        this.products = products;
        return _route.queryParamMap;
      }))       
      .subscribe(params => {
        this.selectedCategory = params.get('category');
        this.filteredProducts = (this.selectedCategory) ?
          this.products.filter(p => p.categoryId == this.selectedCategory) :
          this.products;
      });
  }

  async ngOnInit() {
    this.subscription = (await this._cartService.getCart())
      .subscribe(cart => this.cart = cart); //Call subscribe() to start listening for updates.
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
