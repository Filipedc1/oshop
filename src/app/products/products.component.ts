import { IProduct } from './../interfaces/iproduct';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
// import 'rxjs/add/operator/switchMap'; //switchmap allows you to switch one observable to another
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  categories$;
  selectedCategory;

  constructor(
    _route: ActivatedRoute, // allows us to read the route parameters passed in via the view file
    private _productService: ProductService, 
    private _categoryService: CategoryService) 
  {
    this._productService
      .getAll()
      .pipe(switchMap(products => { 
        this.products = products;
        return _route.queryParamMap;
      }))       
      .subscribe(params => {
        this.selectedCategory = params.get('category');
        console.log('select cat ' + this.selectedCategory);
        this.filteredProducts = (this.selectedCategory) ?
          this.products.filter(p => p.category == this.selectedCategory) :
          this.products;
      });
      
    this.categories$ = _categoryService.getAll();
  }

  ngOnInit() {
  }

}
