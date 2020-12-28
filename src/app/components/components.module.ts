import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../commons/shared/material.module';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SingupComponent } from './singup/singup.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    LoginComponent,
    FooterComponent,
    WelcomeComponent,
    SingupComponent
  ],
  imports: [
  MaterialModule,
  CommonModule
  ],
  exports: [
    ToolbarComponent,
    LoginComponent,
    FooterComponent,
    WelcomeComponent,
    SingupComponent, 
    MaterialModule
  ]
})
export class ComponentsModule { }
