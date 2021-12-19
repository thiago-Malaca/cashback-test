import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoEditComponent } from './produto-edit.component';
import { ProdutoEditRoutingModule } from './produto-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProdutoEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProdutoEditComponent
  ]
})
export class ProdutoEditModule { }
