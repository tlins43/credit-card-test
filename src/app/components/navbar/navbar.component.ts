import { Component } from 'angular-ts-decorators';

@Component({
  selector: 'app-navbar',
  template: require('./navbar.component.html')
})
export class NavbarComponent {
   /*@ngInject*/
   constructor() { }
}