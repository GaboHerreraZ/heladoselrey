import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitarPedidoComponent } from './solicitar-pedido.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitarPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitarPedidoRoutingModule { }
