import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ImagenesComponent } from './imagenes-component/imagenes-component.component';
import { ChunkPipe } from './chunk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImagenesComponent,
    ChunkPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
