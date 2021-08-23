import { IHttpService, IPromise, IQService } from 'angular';
import { Injectable } from 'angular-ts-decorators';
import { AccountPosting } from '../models/account-posting.model';

@Injectable('AccountPostingService')
export class AccountPostingService {
  private accountPosting: AccountPosting;
  private accountPostingUrl = 'lancamento-conta-legado.json';  // URL to web api

  /*@ngInject*/
  constructor(private $http: IHttpService,
              private $q: IQService) { }

  getAccountPosting(): IPromise<AccountPosting> {
    
    const deferred = this.$q.defer<AccountPosting>();
    if (this.accountPosting) {
      deferred.resolve(this.accountPosting);
    } else {
      this.$http.get<AccountPosting>(this.accountPostingUrl).then(response => {
        this.accountPosting = response.data;
        response.data.totalAmount = 22;
        deferred.resolve(response.data);
      }, error => {
        deferred.reject(error);
      });
    }
    return deferred.promise;
  }

 

}