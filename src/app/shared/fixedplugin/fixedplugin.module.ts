import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixedpluginRoutingModule } from './fixedplugin-routing.module';
import { FixedpluginComponent } from './fixedplugin.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FixedpluginComponent
  ],
  imports: [
    CommonModule,
    // FixedpluginRoutingModule
    RouterModule
  ],
  exports: [
    FixedpluginComponent
  ]
})
export class FixedpluginModule { }
