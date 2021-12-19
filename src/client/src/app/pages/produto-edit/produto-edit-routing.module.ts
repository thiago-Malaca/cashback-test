import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoEditComponent } from './produto-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoEditRoutingModule { }
