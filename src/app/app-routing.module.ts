import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TimelineModule } from './timeline/timeline.module';

const appRoutes: Routes = [
  { path: '', redirectTo: '/timeline', pathMatch: 'full' },
  { path: 'timeline', loadChildren: () => TimelineModule },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingComponents = [
  PageNotFoundComponent,
];
