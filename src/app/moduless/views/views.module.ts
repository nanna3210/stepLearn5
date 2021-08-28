import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views/views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { StaticticsComponent } from './statictics/statictics.component';
import {DividerModule} from '../shared/divider/divider.module';
import { ItemListComponent } from './item-list/item-list.component'



@NgModule({
  declarations: [ViewsComponent, StaticticsComponent, ItemListComponent],
  imports: [
    CommonModule, 
    ViewsRoutingModule, 
    DividerModule
  ]
})
export class ViewsModule { }
