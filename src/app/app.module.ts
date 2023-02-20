import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { MatSelectModule } 
    from '@angular/material/select'; 
    import { MatFormFieldModule } 
    from '@angular/material/form-field'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenClothingComponent,
    ProductDetailsComponent,
    WomenClothingComponent,
    ElectronicsComponent,
    JeweleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    NgxSpinnerModule.forRoot({ type: 'ball-spin-clockwise' })
  ],
  providers: [ProductsService,NgxSpinnerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
