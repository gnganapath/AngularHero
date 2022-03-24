import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { LayoutComponentModule } from './layout-component/layout-component.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
