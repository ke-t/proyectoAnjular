import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { BaseComponent } from './base.component';
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ],
  declarations: [
    CatalogoComponent,
    BaseComponent,
    NuevoComponent
  ],
  exports: [BaseComponent]
})
export class CatalogoModule { }
