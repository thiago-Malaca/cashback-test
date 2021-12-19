import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustriaEditComponent } from './industria-edit.component';

const routes: Routes = [
  {
    path: '',
    component: IndustriaEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriaEditRoutingModule { }
