import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _baseUrl = 'https://localhost:44356/api/products';

  constructor(private _http: HttpClient) { }

  create(product) {
    return this._http.post(this._baseUrl, product);
  }
}
