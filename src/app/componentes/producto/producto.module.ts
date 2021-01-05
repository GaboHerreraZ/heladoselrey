import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './producto.component';
import { ComunModule } from 'src/app/shared/module/comun/comun.module';


@NgModule({
  declarations: [ProductoComponent],
  imports: [
    CommonModule,
    ComunModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
