import { BasicComponent } from './basic.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component:BasicComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('../../pages/question-listing/question-listing.module').then(m => m.QuestionListingModule),
      },
      {
        path: "details/:id",
        loadChildren: () => import('../../pages/question-details/question-details.module').then(m => m.QuestionDetailsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
