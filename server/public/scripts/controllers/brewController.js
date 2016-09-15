myApp.controller('BrewController', ['$scope', 'CoffeeFactory',
function ($scope, CoffeeFactory) {
  console.log('brew controller works');
  $scope.coffeeFactory = CoffeeFactory;
  $scope.coffeeFactory.getResults().then(function () {
    $scope.beans = $scope.coffeeFactory.getBeans();
    console.log($scope.beans[0]);

    var counter = 0;
    $scope.showStatus = false;

    $scope.showInfo = function () {
      counter = counter += 1;
      console.log(counter);
      if (counter % 2 !== 0) {
        $scope.showStatus = true;
      } else {
        $scope.showStatus = false;
    };
  };
});

  $scope.methods = ['Aeropress', 'Chemex', 'Cone', 'French Press'];








}]);
