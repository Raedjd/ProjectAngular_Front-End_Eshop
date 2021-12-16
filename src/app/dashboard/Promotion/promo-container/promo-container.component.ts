import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../../app-product/core/services/Product/product.service';
import { product } from '../Core/models/product';
import { PromoC } from '../Core/models/promoC';
import { promotions } from '../Core/models/promotions';
import { ProductServiceService } from '../Core/Services/product-service.service';
import { PromotionsService } from '../Core/Services/promotions.service';

@Component({
  selector: 'app-promo-container',
  templateUrl: './promo-container.component.html',
  styleUrls: ['./promo-container.component.css']
})
export class PromoContainerComponent implements OnInit {

  fetchedData!:promotions[];
  productArray!:Product[];
  nametable:number[]=[];
  finalArray : PromoC[] = [];
  constructor(private api:PromotionsService, private Api:ProductService) { }
  
  ngOnInit(): void {
    this.api.getAllPromo().subscribe((data:promotions[])=>{
      this.fetchedData = data;
      this.nametable = data.map(c=>c.id);
    })
    this.Api.getListProduct().subscribe((data:Product[])=>{
      this.productArray=data;
      this.nametable.forEach(t=>{
        this.finalArray.push({name:t,number:this.productArray.filter(e=>e.idPromo===t).length})
      })
    })
  }

}
