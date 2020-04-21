import { IProduct } from '../../interfaces/iproduct';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  //products$;
  subscription: Subscription;
  products: IProduct[];
  filteredProducts: IProduct[];

  constructor(private _productService: ProductService) { 
    // this.products$ = this._productService.getAll();

    this.subscription = this._productService.getAll()
      .subscribe(products => { 
        this.filteredProducts = this.products = products
      },
      err => { 
        console.log(err);
      }
    );

    console.log(this.products);
  }

  filter(query: string) {
    this.filteredProducts = (query) ? this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) 
                                    : this.products;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
