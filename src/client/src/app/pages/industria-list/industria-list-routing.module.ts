import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustriaListComponent } from './industria-list.component';

const routes: Routes = [
  {
    path: '',
    component: IndustriaListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriaListRoutingModule { }
