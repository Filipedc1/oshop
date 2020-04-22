import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _baseUrl = 'https://localhost:44356/api/category';

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get(this._baseUrl);
  }
}
