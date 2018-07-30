import './root.scss';

import RootController from './root.controller';

/* @ngInject */
export default function rootComponent() {
  return {
    controller: RootController,
    controllerAs: 'root',
    template: require('./root.html'),
  };
}
