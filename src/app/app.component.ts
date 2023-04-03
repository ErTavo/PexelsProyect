import { Component } from '@angular/core';
import { ImagenesComponent } from './imagenes-component/imagenes-component.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-imagenes></app-imagenes>
  `
})
export class AppComponent {
  title = 'Mi aplicación';
}
