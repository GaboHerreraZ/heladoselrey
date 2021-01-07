import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    AngularMaterialModule

  ],
  exports: [
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class ComunModule { }
