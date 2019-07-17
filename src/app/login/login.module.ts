import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { BotDetectCaptchaModule } from 'angular-captcha';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    BotDetectCaptchaModule.forRoot({ 
      captchaEndpoint: 'http://localhost:54850/simple-captcha-endpoint.ashx',
      
    })
  ]
})
export class LoginModule { }
