import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountPostingComponent } from './pages/account-posting/account-posting.component';
import { TableComponent } from './components/table/table.component';
import { AccountPostingService } from './core/services/account-posting.service';
import 'bootstrap';
import '../custom.scss';
import '@uirouter/angularjs';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './components/button/button.component';

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
    TableComponent,
    ModalComponent,
    ButtonComponent
  ],
  providers: [
    AccountPostingService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
