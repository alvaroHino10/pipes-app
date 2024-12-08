import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenubarComponent } from './components/menubar/menubar.component';



@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [ MenubarComponent ]
})
export class SharedModule { }
