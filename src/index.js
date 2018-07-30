import angular from 'angular';

import 'angular/angular-csp.css';
import 'angular-material/angular-material.scss';
import './index.scss';

import rootModule from './root/root.module';

angular.module('main', [
  rootModule
]);

angular.bootstrap(document.documentElement, ['main']);

