import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-men-clothing',
  templateUrl: './men-clothing.component.html',
  styleUrls: ['./men-clothing.component.scss']
})
export class MenClothingComponent implements OnInit {
  mensClothingList: Product[] = []
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.productsService.getProducts('men\'s clothing').subscribe({
      next: (res) => {
        this.mensClothingList = res
        this.spinner.hide();
      }
    })
  }

  sort(event: any) {
    switch (event) {
      case "Low":
        {
          this.mensClothingList = this.mensClothingList.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.mensClothingList = this.mensClothingList.sort((low, high) => high.price - low.price);
          break;
        }
      default: {
        this.mensClothingList = this.mensClothingList.sort((low, high) => low.price - high.price);
        break;
      }

    }
    return this.mensClothingList;

  }
  goToProductDetails(id: number) {
    this.spinner.show()
    this.router.navigate(['/product-details/', id])
  }
}
