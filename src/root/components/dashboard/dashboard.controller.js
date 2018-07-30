
export default class DashboardController {
  constructor($scope, $routeParams, service, $http) {
    $scope.itemId = $routeParams.id;
    $scope.cart = service.getCart() || [];

    $scope.devices = [];

    service.getDevices($http).then(function (data) {
      $scope.devices = data;
    }).catch(function (error) {
      console.log('unable to get the data', error);
    });

    $scope.addItemToCart = function (item) {
      service.addItemToCart(item, 1);
    }

    let pagesShown = 1;
    $scope.pageSize = 7;

    $scope.itemsLimit = function () {
      return $scope.pageSize * pagesShown;
    };
    $scope.hasMoreItemsToShow = function () {
      return pagesShown < ($scope.devices.length / $scope.pageSize);
    };
    $scope.showMoreItems = function () {
      pagesShown = pagesShown + 1;
    };
  }
}
