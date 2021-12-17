import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromoContainerComponent } from './promo-container/promo-container.component';
import { PromocardComponent } from './promocard/promocard.component';
import { PromotionComponent } from './promotion/promotion.component';
import { FormsModule } from '@angular/forms';
import { PromoDetailsComponent } from './promo-details/promo-details.component';


@NgModule({
  declarations: [
    PromoContainerComponent,
    PromocardComponent,
    PromotionComponent,
    PromoDetailsComponent
  ],
  imports: [
    CommonModule,
    PromotionRoutingModule,
    FormsModule
  ]
})
export class PromotionModule { }
 