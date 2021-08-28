import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
const routes: Routes = [
{path: "elements", loadChildren: ()=>import("./moduless/elements/elements.module").then((m)=> m.ElementsModule )}, 
{path :'collections', loadChildren : ()=>import('./moduless/collections/collections.module').then((m)=>m.CollectionsModule)},

{path :'views' , loadChildren : ()=>import("./moduless/views/views.module").then(
  (m) => m.ViewsModule)}, 
  
{path : 'mods' , loadChildren : ()=>import("./moduless/mods/mods.module").then((m) => 
m.ModsModule)},


{path:"" ,component:HomeComponent}, 
{path:"**" ,component:NotFoundComponent}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
