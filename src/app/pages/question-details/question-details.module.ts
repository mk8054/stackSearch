import { AppService } from 'src/app/app.service';
import { QuestionDetailsComponent } from './question-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionDetailsRoutingModule } from './question-details-routing.module';


@NgModule({
  declarations: [
    QuestionDetailsComponent
  ],
  imports: [
    CommonModule,
    QuestionDetailsRoutingModule
  ],
})
export class QuestionDetailsModule { }
