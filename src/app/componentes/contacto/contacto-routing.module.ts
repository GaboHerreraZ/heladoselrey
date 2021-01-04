import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoPrincipalComponent } from './contacto.component';

const routes: Routes = [
  {
    path: '',
    component: ContactoPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
