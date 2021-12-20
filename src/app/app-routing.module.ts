import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormaVzaemidiiComponent } from './forma-vzaemidii/forma-vzaemidii.component';
import { VstavkaComponentaComponent } from './vstavka-componenta/vstavka-componenta.component';

const routes: Routes = [
  {path: '', component: FormaVzaemidiiComponent},
  {path: 'showinputs', component: VstavkaComponentaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
