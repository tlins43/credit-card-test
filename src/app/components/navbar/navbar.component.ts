import { Component } from 'angular-ts-decorators';
let template = require('./navbar.component.html')
let style = require('./navbar.component.scss')
@Component({
  selector: 'app-navbar',
  template: template,
  styles: [style]
})
export class NavbarComponent {
   /*@ngInject*/
   constructor() { }
}