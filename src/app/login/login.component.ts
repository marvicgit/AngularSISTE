import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { routerTransition } from '../router.animations';
import { CaptchaComponent } from 'angular-captcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  @ViewChild(CaptchaComponent, { static: true }) captchaComponent: CaptchaComponent;
  @ViewChild('div', { static: true }) div: ElementRef;
  link: any;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.link = this.renderer.createElement('link');
    this.renderer.setProperty(this.link, 'type', 'text/css');
    this.renderer.setProperty(this.link, 'rel', 'Stylesheet');
    this.renderer.setProperty(this.link, 'href', 'http://localhost:54850/simple-captcha-endpoint.ashx?get=layout-stylesheet&amp;t=1562072400');
    
    this.renderer.appendChild(this.div.nativeElement, this.link);
  }

}
