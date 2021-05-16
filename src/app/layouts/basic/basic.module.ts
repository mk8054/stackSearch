import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    BasicComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BasicRoutingModule
  ],
})
export class BasicModule { }
