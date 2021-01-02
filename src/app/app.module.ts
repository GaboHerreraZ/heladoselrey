import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {  HeaderComponent} from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AngularMaterialModule } from './shared/module/angular-material/angular-material.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { ContactoComponent } from './componentes/footer/contacto/contacto.component';
import { PaginasComponent } from './componentes/paginas.component';
import { LoadingComponent } from './shared/loading/loading/loading.component';
import { LoadingService } from './shared/loading/loading-shaerd/loading-shared.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginasComponent,
    FooterComponent,
    ContactoComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
