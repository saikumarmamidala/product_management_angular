import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private appUrl = 'http://localhost:3000/api';
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.appUrl}/products`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.appUrl}/products/${id}`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.appUrl}/products`, product);
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put<any>(`${this.appUrl}/products/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.appUrl}/products/${id}`);
  }
}