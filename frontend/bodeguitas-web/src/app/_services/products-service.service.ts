import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  constructor(
    private http: HttpClient
  ) { }
  //localhost:3000/products/1?product_type=viveres
  getProductsByType(user_id: any, product_type: any) {
    return this.http.get<any>(`http://localhost:9000/products/${user_id}?product_type=${product_type}`);
  }
  insertProduct(user_id: any, product: any) {
    return this.http.post<any>(`http://localhost:9000/products/${user_id}`, product);
  }
  deleteProduct(user_id: any, product_id: any) {
    return this.http.delete<any>(`http://localhost:9000/products/${user_id}/${product_id}`);
  }
  updateProduct(user_id: any, product_id: any, product: any) {
    return this.http.put<any>(`http://localhost:9000/products/${user_id}/${product_id}`, product);
  }
}