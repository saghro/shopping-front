import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: any; // Modifier la visibilité de 'products'

  constructor(private catService: CatalogueService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.catService.getResource("/products/search/selectedProducts").subscribe(
      (data: any) => {
        this.products = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
