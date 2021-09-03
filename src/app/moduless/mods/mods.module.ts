import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModshomeComponent } from './modshome/modshome.component';
import { DividerModule } from '../shared/divider/divider.module';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [ModshomeComponent, ModalComponent, AccordionComponent],
  imports: [
    CommonModule,
    ModsRoutingModule, 
    DividerModule
  ]
})
export class ModsModule { }
