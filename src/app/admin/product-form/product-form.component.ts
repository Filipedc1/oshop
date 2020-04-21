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
  productId;

  constructor(
    private _categoryService: CategoryService, 
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute) 
  { 
    this.categories$ = _categoryService.getCategories();

    this.productId = this._route.snapshot.paramMap.get('productId');
    if (this.productId) {
      this._productService.getProduct(this.productId)
        .pipe(take(1)) // allows us to take only 1 value from an observable and it will automatically unsubscribe.
        .subscribe(p => this.product = p);
    }
  }

  ngOnInit() {
  }

  save(product) {
    // Update
    if (this.productId) {
      this._productService.update(this.productId, product)
        .subscribe(result => {
          console.log('update product success');
          this._router.navigate(['/admin/products']);
        },
        err => { 
          console.log(err);
        }
      );
    }
    else {
      //Create
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

  delete() {
    if (confirm('Are you sure you want to delete this product?')){
      this._productService.delete(this.productId)
        .subscribe(result => {
          console.log('delete product success');
          this._router.navigate(['/admin/products']);
        },
        err => { 
          console.log(err);
        }
      );
    }
  }

}
