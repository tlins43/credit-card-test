import { Component } from 'angular-ts-decorators';

@Component({
  selector: 'app-dashboard',
  template: require('./dashboard.component.html')
})
export class DashboardComponent {
   /*@ngInject*/
   constructor() { }
}
