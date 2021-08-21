import { Component } from 'angular-ts-decorators';
let template = require('./account-posting.component.html')
let style = require('./account-posting.component.scss')

@Component({
  selector: 'app-account-posting',
  template: template,
  styles: [style]
})
export class AccountPostingComponent {
   /*@ngInject*/
   headers = [
    {name: "nome" },
    {name: "idade"},
    {name: "idade"},
    {name: "idade"},
    {name: "idade"}
    ]; 
contents = [
    {name: "thomas", age: 25, end: "www", est: 25, boss:"ss"},
    {name: "www", age: 25, end: "www", est: 25, boss:"ss"},
    ]; 
   constructor() { }
}
