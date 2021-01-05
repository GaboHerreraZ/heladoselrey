import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitarPedidoRoutingModule } from './solicitar-pedido-routing.module';
import { SolicitarPedidoComponent } from './solicitar-pedido.component';


@NgModule({
  declarations: [SolicitarPedidoComponent],
  imports: [
    CommonModule,
    SolicitarPedidoRoutingModule
  ]
})
export class SolicitarPedidoModule { }
