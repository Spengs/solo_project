myApp.controller('BeanController', ['$scope', '$uibModal', 'CoffeeFactory', function ($scope, $uibModal, CoffeeFactory) {
  console.log('bean controller works');
  $scope.coffeeFactory = CoffeeFactory;
  $scope.coffeeFactory.getResults().then(function () {
    $scope.beans = $scope.coffeeFactory.getBeans();

  });

  $scope.click = function () {
    console.log('click works');
  };

}]);
