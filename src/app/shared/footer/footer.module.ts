import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    // FooterRoutingModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
