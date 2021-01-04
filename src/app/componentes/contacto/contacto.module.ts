import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoPrincipalComponent } from './contacto.component';
import { AngularMaterialModule } from 'src/app/shared/module/angular-material/angular-material.module';
import { ComunModule } from 'src/app/shared/module/comun/comun.module';


@NgModule({
  declarations: [ContactoPrincipalComponent],
  imports: [
    CommonModule,
    ComunModule,
    ContactoRoutingModule,
    AngularMaterialModule
  ]
})
export class ContactoModule { }
