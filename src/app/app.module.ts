import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { ScalelineComponent } from './components/scaleline/scaleline.component';
import { MousePositionComponent } from './components/mouse-position/mouse-position.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ScalelineComponent,
    MousePositionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
