import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import 'bootstrap'
import '../custom.scss'
import '@uirouter/angularjs'
import { AccountPostingComponent } from './pages/account-posting/account-posting.component';
import { TableComponent } from './components/table/table.component';
import { AccountPostingService } from './core/services/account-posting.service';


@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountPostingComponent,
    NavbarComponent,
    TableComponent
  ],
  providers: [
    AccountPostingService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
