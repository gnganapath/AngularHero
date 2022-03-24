import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LeftmenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent,LeftmenuComponent]
})
export class LayoutComponentModule { }
