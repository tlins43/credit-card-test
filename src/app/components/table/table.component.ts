import { Component, Input } from 'angular-ts-decorators';
let template = require('./table.component.html')
let style = require('./table.component.scss')
@Component({
  selector: 'app-table',
  template: template,
  styles: [style],
  bindings: { headers: '=', contents: '=' }
 
})
export class TableComponent {    
   /*@ngInject*/
   constructor() { }

}