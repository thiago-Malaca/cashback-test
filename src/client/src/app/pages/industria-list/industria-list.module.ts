import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustriaListComponent } from './industria-list.component';
import { IndustriaListRoutingModule } from './industria-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    IndustriaListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    IndustriaListComponent
  ]
})
export class IndustriaListModule { }
