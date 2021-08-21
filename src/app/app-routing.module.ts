import { StateProvider } from '@uirouter/angularjs';
import { Ng1StateDeclaration } from '@uirouter/angularjs/lib/interface';
import { getTypeName, NgModule } from 'angular-ts-decorators';
import { AccountPostingComponent } from './pages/account-posting/account-posting.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export interface UiState extends Ng1StateDeclaration {
  component?: any;
}

const routes: UiState[] = [
  { name: 'index', url: '', redirectTo: 'dashboard' },
  { name: 'dashboard', url: '/inicio', component: DashboardComponent },
  { name: 'account-posting', url: '/transacoes', component: AccountPostingComponent },
];

@NgModule({
  id: 'AppRoutingModule',
  imports: [
    'ui.router'
  ],
})
export class AppRoutingModule {
  static config($stateProvider: StateProvider) {
    'ngInject';
    routes.forEach(route => $stateProvider.state(getNg1StateDeclaration(route)));
  }
}

function getNg1StateDeclaration(state: UiState) {
  if (state.component && typeof state.component !== 'string') {
    state.component = getTypeName(state.component);
  }
  return state;
}

