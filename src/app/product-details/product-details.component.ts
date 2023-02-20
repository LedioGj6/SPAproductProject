import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  idFromRoute: any = '';
  productDetails: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: null,
  };
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private spinner:NgxSpinnerService
  ) {
    this.idFromRoute = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.spinner.show();
    this.productsService.getProductDetails(this.idFromRoute).subscribe({
      next: (res) => {
        this.productDetails = res;
        this.spinner.hide();
      },
    });
  }
}
