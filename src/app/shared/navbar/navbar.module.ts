import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    // NavbarRoutingModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
