import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { KilometerPipe } from './pipe/kilometer.pipe';
import { ClaassDirective } from './claass.directive';
import { TimesDirective } from './structuralDir/times.directive';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    KilometerPipe,
    ClaassDirective,
    TimesDirective
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
