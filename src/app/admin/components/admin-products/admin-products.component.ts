import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IProduct } from 'shared/interfaces/iproduct';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  //products$;
  subscription: Subscription;

  products: IProduct[];

  displayedColumns: string[] = ['name', 'price', 'actions'];
  dataSource: MatTableDataSource<IProduct>; 

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _productService: ProductService) { 
    // this.products$ = this._productService.getAll();

    this.subscription = this._productService.getAll()
      .subscribe(products => { 
        this.products = products;
        this.initializeTable(products);
      },
      err => { 
        console.log(err);
      }
    );

    console.log(this.products);
  }

  ngOnInit() {
 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  private initializeTable(products: IProduct[]) {
    this.dataSource = new MatTableDataSource<IProduct>(products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filter(query: string) {
    let filteredProducts = (query) ? 
      this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : 
      this.products;

    this.initializeTable(filteredProducts);
  }

}
