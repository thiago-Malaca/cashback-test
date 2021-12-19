import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustriaEditComponent } from './industria-edit.component';
import { IndustriaEditRoutingModule } from './industria-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    IndustriaEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    IndustriaEditComponent
  ]
})
export class IndustriaEditModule { }
