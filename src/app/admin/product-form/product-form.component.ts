import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};

  constructor(
    private _categoryService: CategoryService, 
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute) 
  { 
    this.categories$ = _categoryService.getCategories();

    let productId = this._route.snapshot.paramMap.get('productId');
    if (productId) {
      this._productService.getProduct(productId)
        .pipe(take(1)) // allows us to take only 1 value from an observable and it will automatically unsubscribe.
        .subscribe(p => this.product = p);
    }
  }

  ngOnInit() {
  }

  save(product) {
    console.log(product);
    this._productService.create(product)
      .subscribe(result => {
        console.log('create product success');
        this._router.navigate(['/admin/products']);
      },
      err => { 
        console.log(err);
      }
    );
  }

}
