import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListComponent } from './produto-list.component';
import { ProdutoListRoutingModule } from './produto-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProdutoListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProdutoListComponent
  ]
})
export class ProdutoListModule { }
