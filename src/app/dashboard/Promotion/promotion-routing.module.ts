import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoDetailsComponent } from './promo-details/promo-details.component';
import { PromotionComponent } from './promotion/promotion.component';

const routes: Routes = [
  {path:'',component:PromotionComponent},
  {path:':name',component:PromoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }
