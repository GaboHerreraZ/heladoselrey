import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './producto.component';
import { ComunModule } from 'src/app/shared/module/comun/comun.module';
import { ProductoCarouselComponent } from './producto-shared/producto-carousel/producto-carousel.component';
import { AngularMaterialModule } from 'src/app/shared/module/angular-material/angular-material.module';


@NgModule({
  declarations: [ProductoComponent, ProductoCarouselComponent],
  imports: [
    CommonModule,
    ComunModule,
    ProductoRoutingModule,
    AngularMaterialModule
  ]
})
export class ProductoModule { }
