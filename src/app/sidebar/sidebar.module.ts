import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    // SidebarRoutingModule
    RouterModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
