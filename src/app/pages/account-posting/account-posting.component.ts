
import { Component } from 'angular-ts-decorators';
import { AccountPosting } from '../../core/models/account-posting.model';
import { AccountPostingService } from '../../core/services/account-posting.service';
import { HEADERS } from './consts/headers';
let template = require('./account-posting.component.html')
let style = require('./account-posting.component.scss')

@Component({
  selector: 'app-account-posting',
  template: template,
  styles: [style]
})
export class AccountPostingComponent { 
  accountPosting: AccountPosting; 
   /*@ngInject*/
   headers = HEADERS;
   constructor(
    private AccountPostingService: AccountPostingService
    ) { }


  ngOnInit(): void {    
    this.getAccountPosting();
    
  }


 getAccountPosting() {
  this.AccountPostingService.getAccountPosting().then(item => (this.accountPosting = item))
  }

}
