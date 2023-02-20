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
export class JeweleryComponent implements OnInit {
  jeweleryList:Product[]=[]
  constructor(
    private productsService:ProductsService,
    private router:Router,
    private spinner:NgxSpinnerService
  ){
  }

  ngOnInit(): void {
    this.spinner.show();
    this.productsService.getProducts('jewelery').subscribe({
      next:(res)=>{
        console.log(res);
        console.log(JSON.stringify(res));
        this.jeweleryList = res;
        console.log(this.jeweleryList);
        this.spinner.hide();
      }



    })
  }
    goToProductDetails(id:number){
      this.spinner.show();
      this.router.navigate(['/product-details/',id]);
    }
  }

