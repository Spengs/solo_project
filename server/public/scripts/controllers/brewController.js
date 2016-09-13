myApp.controller('BrewController', ['$scope', 'CoffeeFactory', function ($scope, CoffeeFactory) {
  console.log('brew controller works');
  $scope.coffeeFactory = CoffeeFactory;
  $scope.coffeeFactory.getResults().then(function () {
    $scope.beans = $scope.coffeeFactory.getBeans();
    console.log($scope.beans);
});








}]);
