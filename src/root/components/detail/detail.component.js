import './detail.scss';

import DetailController from './detail.controller';

/* @ngInject */
export default function detailComponent() {
  return {
    controller: DetailController,
    controllerAs: 'detail',
    template: require('./detail.html'),
  };
}
