import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
const materialComponents = [
  MatButtonModule, MatButtonToggleModule
];

@NgModule({
  exports: [materialComponents],
  imports: [
    materialComponents
  ]
})
export class MaterialModule { }
