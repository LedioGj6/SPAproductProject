import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.scss']
})
export class JeweleryComponent implements OnInit  {
  jeweleryList: Product[] = [];
  constructor(private productsService:ProductsService,  private router: Router,
    private spinner: NgxSpinnerService){

  }
  ngOnInit(){
    this.productsService.getProducts('jewelery').subscribe(
      {
        next:(res) => {
          console.log(res);
          this.jeweleryList = res;
        }
      }
    )
  }
  sort(event: any) {
    switch (event) {
      case "Low":
        {
          this.jeweleryList = this.jeweleryList.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.jeweleryList = this.jeweleryList.sort((low, high) => high.price - low.price);
          break;
        }
      default: {
        this.jeweleryList = this.jeweleryList.sort((low, high) => low.price - high.price);
        break;
      }

    }
    return this.jeweleryList;

  }
  goToProductDetails(id: number) {
    this.spinner.show()
    this.router.navigate(['/product-details/', id])
  }
}
