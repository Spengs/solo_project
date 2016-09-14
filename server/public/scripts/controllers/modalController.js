myApp.controller('ModalController', ['$scope', 'CoffeeFactory', '$uibModal', function($scope, CoffeeFactory, $uibModal){
  $scope.coffeeFactory = CoffeeFactory;
  $scope.coffeeFactory.getResults().then(function () {
    $scope.beans = $scope.coffeeFactory.getBeans();
    
  });
}]);
