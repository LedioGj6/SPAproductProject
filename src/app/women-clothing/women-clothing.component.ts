import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-women-clothing',
  templateUrl: './women-clothing.component.html',
  styleUrls: ['./women-clothing.component.scss']
})
export class WomenClothingComponent {
  womensClothingList:Product[] = []
  constructor(private productsService:ProductsService, private router:Router,private spinner:NgxSpinnerService){
  }

  ngOnInit(): void {
    this.spinner.show();
    this.productsService.getProducts('women\'s clothing').subscribe({
      next:(res)=>{
        console.log(res);
        console.log(JSON.stringify(res))
        this.womensClothingList = res
        console.log(this.womensClothingList)
        this.spinner.hide();
      }
    })
  }
  sort(event: any) {
    switch (event) {
      case "Low":
        {
          this.womensClothingList = this.womensClothingList.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.womensClothingList = this.womensClothingList.sort((low, high) => high.price - low.price);
          break;
        }
      default: {
        this.womensClothingList = this.womensClothingList.sort((low, high) => low.price - high.price);
        break;
      }

    }
    return this.womensClothingList;

  }
  goToProductDetails(id:number){
    this.router.navigate(['/product-details/',id])
  }
}
