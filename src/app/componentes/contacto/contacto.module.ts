import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoPrincipalComponent } from './contacto.component';
import { AngularMaterialModule } from 'src/app/shared/module/angular-material/angular-material.module';


@NgModule({
  declarations: [ContactoPrincipalComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    AngularMaterialModule

  ]
})
export class ContactoModule { }
