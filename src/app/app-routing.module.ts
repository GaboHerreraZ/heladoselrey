import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginasComponent } from './componentes/paginas.component';

const routes: Routes = [
 {
  path: 'inicio',
  component: PaginasComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./componentes/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'contacto',
      loadChildren: () => import('./componentes/contacto/contacto.module').then(m => m.ContactoModule)
    },
    {
      path: 'nuestros-productos',
      loadChildren: () => import('./componentes/producto/producto.module').then(m => m.ProductoModule)
    },
    {
      path: 'solicitar-pedido',
      loadChildren: () => import('./componentes/solicitar-pedido/solicitar-pedido.module').then(m => m.SolicitarPedidoModule)
    },
    {
      path: 'quienes-somos',
      loadChildren: () => import('./componentes/quienes-somos/quienes-somos.module').then(m => m.QuienesSomosModule)
    }
  ]
},
{
  path: '',
  redirectTo: '/inicio',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/inicio',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

