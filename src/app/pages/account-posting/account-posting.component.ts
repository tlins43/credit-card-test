import { StateService } from '@uirouter/angularjs';
import { Component, Input } from 'angular-ts-decorators';
import { AccountPosting } from '../../core/models/account-posting.model';
import { AccountPostingService } from '../../core/services/account-posting.service';
let template = require('./account-posting.component.html')
let style = require('./account-posting.component.scss')

@Component({
  selector: 'app-account-posting',
  template: template,
  styles: [style]
})
export class AccountPostingComponent { 
  accountPosting: AccountPosting[]; 
   /*@ngInject*/
  
   constructor(
    private AccountPostingService: AccountPostingService
    ) { }


  ngOnInit(): void {
    console.log("tetse")
    this.getAccountPosting();
  }

  getAccountPosting(): void {
    this.AccountPostingService.getAccountPosting().then(accountPosting => this.accountPosting = accountPosting);
  }
}
