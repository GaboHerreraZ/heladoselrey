import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHistoriaComponent } from './home-historia/home-historia.component';
import { HomeTestimonioComponent } from './home-testimonio/home-testimonio.component';
import { ComunModule } from 'src/app/shared/module/comun/comun.module';


@NgModule({
  declarations: [HomeComponent, HomeHistoriaComponent, HomeTestimonioComponent],
  imports: [
    CommonModule,
    ComunModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
