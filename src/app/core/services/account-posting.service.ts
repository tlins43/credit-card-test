import { IHttpService, IPromise, IQService } from 'angular';
import { Injectable } from 'angular-ts-decorators';
import { AccountPosting } from '../models/account-posting.model';


@Injectable('accountPostingService')
export class AccountPostingService {
  private accountPosting: AccountPosting[] = [];

  private accountPostingUrl = 'lancamento-conta-legado.json';  // URL to web api

  /*@ngInject*/
  constructor(private $http: IHttpService,
              private $q: IQService) { }

  getAccountPosting(): IPromise<AccountPosting[]> {
    const deferred = this.$q.defer<AccountPosting[]>();
    if (this.accountPosting.length) {
      deferred.resolve(this.accountPosting);
    } else {
      this.$http.get<AccountPosting[]>(this.accountPostingUrl).then(response => {
       
        this.accountPosting = response.data;
        deferred.resolve(response.data);
      }, error => {
        deferred.reject(error);
      });
    }
    return deferred.promise;
  }
}