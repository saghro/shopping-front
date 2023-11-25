import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public categories: any; // Définir un type approprié pour 'categories'

  constructor(private catService: CatalogueService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.catService.getResource('/categories').subscribe(
      (data: any) => {
        this.categories = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
