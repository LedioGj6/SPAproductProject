import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';

const routes: Routes =[
  { path: '', redirectTo: 'men-clothing', pathMatch: 'full'},
  { path: 'men-clothing', component: MenClothingComponent},
  { path: 'women-clothing', component: WomenClothingComponent},
  { path: 'jewelery', component: JeweleryComponent},
  { path: 'electronics', component: ElectronicsComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: '**', redirectTo: 'men-clothing', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
