import { Router } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor(
    private _categoryService: CategoryService, 
    private _productService: ProductService,
    private _router: Router) 
  { 
    this.categories$ = _categoryService.getCategories();
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
