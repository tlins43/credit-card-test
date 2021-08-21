import { Component } from 'angular-ts-decorators';
let template = require('./dashboard.component.html')
let style = require('./dashboard.component.scss')
@Component({
  selector: 'app-dashboard',
  template: template,
  styles: [style],
})
export class DashboardComponent {
   /*@ngInject*/
   constructor() { }
}
