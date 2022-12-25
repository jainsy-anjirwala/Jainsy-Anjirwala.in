import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalloginRoutingModule } from './personallogin-routing.module';
import { PersonalloginComponent } from './personallogin.component';


@NgModule({
  declarations: [
    PersonalloginComponent
  ],
  imports: [
    CommonModule,
    PersonalloginRoutingModule
  ]
})
export class PersonalloginModule { }
