myApp.controller('BeanController', ['$scope', 'CoffeeFactory', '$modal', function ($scope, CoffeeFactory, $modal) {
  console.log('bean controller works');
  $scope.coffeeFactory = CoffeeFactory;
  $scope.coffeeFactory.getResults().then(function () {
    $scope.beans = $scope.coffeeFactory.getBeans();

  });

  
  $scope.click = function () {
    console.log('click works');
  };

}]);
