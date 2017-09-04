import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MdButtonModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';

import { LayoutRoutingModule } from './layout-routing.module';
import { ShellComponent } from './shell.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';

import { InicioModule } from './../../routes/inicio/inicio.module';
import { SobreModule } from './../../routes/sobre/sobre.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    InicioModule,
    SobreModule,
    MdButtonModule,
    MdIconModule,
    MdTooltipModule
  ],
  declarations: [
    ShellComponent,
    TopBarComponent,
    MainContentComponent,
    FooterComponent
  ],
  exports: [ShellComponent]
})
export class LayoutModule { }
