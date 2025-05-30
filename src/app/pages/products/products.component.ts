import { CommonModule } from '@angular/common';
import { ProductService } from './../../services/product.service'
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from "../../component/product-card/product-card.component";

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products: any[] = []

  constructor(private productService: ProductService) {}

  ngOnInit() {
    console.log('ProductsComponent initialized');
    this.products = this.productService.getProducts();
  }

  editProduct(id: number) {
    console.log('Edit product', id);
  }

  deleteProduct(id: number) {
    console.log('Delete product', id);
  }

  ngOnDestroy() {
    console.log('ProductsComponent destroyed');
  }
}