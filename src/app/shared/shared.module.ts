import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { CircleMenuComponent } from './common/circle-menu/circle-menu.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { CustomTableComponent } from './common/custom-table/custom-table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CircleMenuComponent,
    CustomTableComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CircleMenuComponent,
    CustomTableComponent
  ]
})
export class SharedModule { }
