export default class DetailController {
  constructor($scope, service) {
    $scope.cart = service.getCart() || [];
    $scope.total = service.countTotal();

    const updateState = function () {
      $scope.cart = service.getCart();
      $scope.total = service.countTotal();
    }

    $scope.removeOne = function (item) {
      service.removeOneOfItem(item);
      updateState();
    }

    $scope.addOneItem = function (item) {
      service.addItemToCart(item, 1);
      updateState();
    }

    $scope.removeAllItem = function (item) {
      service.removeItem(item);
      updateState();
    }

    $scope.deleteAll = function () {
      service.clearCart();
      $scope.cart = [];
      $scope.total = 0;
    }
  }

}
