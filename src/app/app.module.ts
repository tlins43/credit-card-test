import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import 'bootstrap'
import '../custom.scss'
import { AccountPostingComponent } from './pages/account-posting/account-posting.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountPostingComponent,
    HeroDetailComponent,
    NavbarComponent,
    TableComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
