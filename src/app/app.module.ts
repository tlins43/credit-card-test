import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import 'bootstrap'
import '../custom.scss'


@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    NavbarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
