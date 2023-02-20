import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit{
  electronicList:Product[] = []
  constructor(
    private productsService:ProductsService,
    private router:Router,
    private spinner:NgxSpinnerService
  ){
}

  ngOnInit(): void {
    this.spinner.show();
    this.productsService.getProducts('electronics').subscribe({
      next:(res)=>{
        this.electronicList = res;
        this.spinner.hide();
      }

    })
  }
  sort(event: any) {
    switch (event) {
      case "Low":
        {
          this.electronicList = this.electronicList.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.electronicList = this.electronicList.sort((low, high) => high.price - low.price);
          break;
        }
      default: {
        this.electronicList = this.electronicList.sort((low, high) => low.price - high.price);
        break;
      }

    }
    return this.electronicList;

  }

  goToProductDetails(id:number){
    this.spinner.show();
    this.router.navigate(['/product-details/',id]);
  }

}

