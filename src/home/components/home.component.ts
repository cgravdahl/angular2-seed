import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'sd-home',
  templateUrl: './home/components/home.component.html',
  styleUrls: ['./home/components/home.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {}
