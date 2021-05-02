import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WineitemComponent } from './wine/wineitem/wineitem.component';
import { WinelistComponent } from './winelist/winelist.component';

@NgModule({
  declarations: [
    AppComponent,
    WineitemComponent,
    WinelistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
