import angular from 'angular';
import rootComponent from './root.component';
import router from './router';
import ngRoute from 'angular-route';
import DashboardService from './service';
import dashboardComponent from './components/dashboard/dashboard.component';
import detailComponent from './components/detail/detail.component';

import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import svgAssetsCache from 'svg-assets-cache';

export default angular
  .module('root', [ngRoute, ngMaterial, ngMessages, svgAssetsCache])
  .component('rootComponent', rootComponent())
  .component('dashboard', dashboardComponent())
  .component('detail', detailComponent())
  .service('service', DashboardService)
  .config(router)
  .name;
