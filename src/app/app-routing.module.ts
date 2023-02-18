import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';

const routes: Routes =[
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'men-clothing', component: MenClothingComponent},
  { path: 'women-clothing', component: WomenClothingComponent},
  { path: 'jewelery', component: JeweleryComponent},
  { path: 'electronics', component: ElectronicsComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
