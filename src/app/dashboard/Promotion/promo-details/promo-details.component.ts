import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../../app-product/core/services/Product/product.service';
import { product } from '../Core/models/product';

@Component({
  selector: 'app-promo-details',
  templateUrl: './promo-details.component.html',
  styleUrls: ['./promo-details.component.css']
})
export class PromoDetailsComponent implements OnInit {

  filterName!:number;
  filteredData!:Product[];
  constructor(private route: ActivatedRoute, private api:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.filterName = this.route.snapshot.params.name;
    this.api.getListProduct().subscribe((data:Product[])=>{
      this.filteredData = data.filter(product=>product.idPromo===this.filterName);
      // if(this.filteredData.length===0) {
      //   this.router.navigateByUrl('/dashboard/promotion');
      // }
    })
  }

} 
