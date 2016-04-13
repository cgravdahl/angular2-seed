import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from '../../home/components/home.component';
import {AboutComponent} from '../../about/components/about.component';
import {FooterComponent} from './footer.component';
import {SignUpComponent} from '../../sign-up/components/sign-up.component';

@Component({
  selector: 'sd-app',
  templateUrl: './app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, FooterComponent]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/sign-up', name: 'Sign-up', component: SignUpComponent}
])
export class AppComponent {}
