import { QuestionListingComponent } from './question-listing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionListingRoutingModule } from './question-listing-routing.module';

@NgModule({
  declarations: [QuestionListingComponent],
  imports: [
    CommonModule,
    QuestionListingRoutingModule
  ]
})
export class QuestionListingModule { }
