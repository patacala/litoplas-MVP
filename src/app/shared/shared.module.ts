import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CircleMenuComponent } from './common/circle-menu/circle-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CircleMenuComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CircleMenuComponent
  ]
})
export class SharedModule { }
