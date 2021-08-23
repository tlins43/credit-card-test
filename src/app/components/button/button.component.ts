import { Component, Input } from 'angular-ts-decorators';
let template = require('./button.component.html')
let style = require('./button.component.scss')
@Component({
  selector: 'app-button',
  template: template,
  styles: [style],
  bindings: { content: '='}
 
})

export class ButtonComponent {    
   /*@ngInject*/
   constructor() {}

 

}