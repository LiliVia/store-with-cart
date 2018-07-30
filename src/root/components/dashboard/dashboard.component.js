import './dashboard.scss';

import DashboardController from './dashboard.controller';

/* @ngInject */
export default function dashboardComponent() {
  return {
    controller: DashboardController,
    controllerAs: 'dashboard',
    template: require('./dashboard.html'),
  };
}
