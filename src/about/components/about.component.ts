import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'sd-about',
  templateUrl: './about/components/about.component.html',
  styleUrls: ['./about/components/about.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AboutComponent {}
