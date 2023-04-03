import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagenesComponent } from './imagenes-component/imagenes-component.component';

const routes: Routes = [
  { path: '', component: ImagenesComponent },
  { path: 'imagenes', component:ImagenesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
