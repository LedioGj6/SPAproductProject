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
export class MenClothingComponent  implements OnInit{
  mensClothingList:Product[] = []
  constructor(
    private productsService:ProductsService, 
    private router:Router,
    private spinner:NgxSpinnerService
    ){
  }

  ngOnInit(): void {
    this.spinner.show();
    this.productsService.getProducts('men\'s clothing').subscribe({
      next:(res)=>{
        console.log(res);
        console.log(JSON.stringify(res))
        this.mensClothingList = res
        console.log(this.mensClothingList)
        this.spinner.hide();
      }
    })
  }
  goToProductDetails(id:number){
    this.spinner.show()
    this.router.navigate(['/product-details/',id])
  }
}
