import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AngularMaterialModule } from 'src/app/shared/module/angular-material/angular-material.module';
import { HomeHistoriaComponent } from './home-historia/home-historia.component';
import { HomeTestimonioComponent } from './home-testimonio/home-testimonio.component';


@NgModule({
  declarations: [HomeComponent, HomeHistoriaComponent, HomeTestimonioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule
  ]
})
export class HomeModule { }
