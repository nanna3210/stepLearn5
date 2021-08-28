import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { KilometerPipe } from './pipe/kilometer.pipe';
import { ClaassDirective } from './claass.directive';
import { TimesDirective } from './structuralDir/times.directive';
import { RouterModule } from '@angular/router';
// import { ElementsModule } from './moduless/elements/elements.module';
import { AppRoutingModule } from './app-routing.module';
// import { CollectionsModule } from './moduless/collections/collections.module';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { BiographyComponent } from './collections/biography/biography.component';




@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    KilometerPipe,
    ClaassDirective,
    TimesDirective,
    HomeComponent,
    NotFoundComponent
    

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    // ElementsModule, 
    // CollectionsModule,
    // CollectionsModule, 
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
