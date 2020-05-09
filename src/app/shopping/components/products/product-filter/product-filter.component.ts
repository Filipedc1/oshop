import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'app/shared/services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;

  @Input('selectedCategory') selectedCategory;

  constructor(private _categoryService: CategoryService) { 
    this.categories$ = _categoryService.getAll();
  }

  ngOnInit() {
  }

}
