import { Cart } from 'shared/models/cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { IProduct } from 'shared/interfaces/iproduct';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'; //switchmap allows you to switch one observable to another
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  selectedCategory;
  cart$: Observable<Cart>;

  constructor(
    private _route: ActivatedRoute, // allows us to read the route parameters passed in via the view file
    private _productService: ProductService,
    private _cartService: ShoppingCartService) 
  {

  }

  async ngOnInit() {
    this.cart$ = await this._cartService.getCart();
    this.populateProducts();
  }

  private populateProducts() {
    this._productService
      .getAll()
      .pipe(switchMap(products => { 
        this.products = products;
        return this._route.queryParamMap;
      }))       
      .subscribe(params => {
        this.selectedCategory = params.get('category');
        this.applyFilter();
      });
  }

  private applyFilter() {
    this.filteredProducts = (this.selectedCategory) ?
    this.products.filter(p => p.categoryId == this.selectedCategory) :
    this.products;
  }
}
