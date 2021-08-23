import { Component, Input } from 'angular-ts-decorators';
let template = require('./modal.component.html')
let style = require('./modal.component.scss')
@Component({
  selector: 'app-modal',
  template: template,
  styles: [style],
  bindings: { name: '@', content: '='}
 
})

export class ModalComponent {    
   /*@ngInject*/
   constructor() {}

 

}