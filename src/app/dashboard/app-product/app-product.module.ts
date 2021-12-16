import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppProductRoutingModule } from './app-product-routing.module';
import { FormProductComponent } from './form-product/form-product.component';
import { MainProductComponent } from './main-product/main-product.component';
import { ProductComponent } from './product/product.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    FormProductComponent,
    MainProductComponent,
    ProductComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    AppProductRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class AppProductModule { }
