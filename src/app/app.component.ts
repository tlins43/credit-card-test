import { Component } from 'angular-ts-decorators';
let template = require('./app.component.html')
let style = require('./app.component.scss')
@Component({
  selector: 'app-root',
  template: template,
  styles: [style]
  
})
export class AppComponent {
}
