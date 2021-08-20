import { StateService } from '@uirouter/angularjs';
import { IHttpResponse } from 'angular';
import { Component, Input, OnInit } from 'angular-ts-decorators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  template: require('./hero-detail.component.html')
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  /*@ngInject*/
  constructor(
    private $state1: StateService,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.$state1.params.id;
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack(): void {
    this.$state1.go('dashboard');
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .then(() => this.goBack());
  }
}
